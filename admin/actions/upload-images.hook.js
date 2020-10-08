const path = require("path");
const fs = require("fs");
const dateFormat = require("dateformat");
const { DETAIL_IMAGE_RESIZE } = require("../constants");
const { makeMd5Hash } = require("../util");
const sharp = require("sharp");

const after = async (response, request, context) => {
  const { record, uploadImages } = context;

  if (record.isValid() && uploadImages) {
    const images = [];

    const today = dateFormat(new Date(), "yyyy-mm-dd");

    for (const uploadImage of uploadImages) {
      const newFileName = makeMd5Hash(uploadImage.name);
      const fileExt = path.extname(uploadImage.name);

      const filePath = path.join(
        "uploads",
        today,
        `${newFileName}-original${fileExt}`
      );

      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      await fs.promises.rename(uploadImage.path, filePath);

      const resizedPath = [
        "uploads",
        today,
        `${newFileName}-resized${fileExt}`,
      ].join("/");

      await sharp(filePath)
        .resize(DETAIL_IMAGE_RESIZE.width, DETAIL_IMAGE_RESIZE.height)
        .jpeg({ quality: 90 })
        .toFile(resizedPath, (err, resizeImage) => {
          if (err) {
            console.log(err);
          } else {
            console.log(resizeImage);
          }
        });

      images.push(`/${resizedPath}`);
    }

    await record.update({ images });
  }
  return response;
};

const before = async (request, context) => {
  if (request.method === "post" && request.payload["uploadImages.0"]) {
    const uploadImages = [];

    Object.keys(request.payload).forEach((key) => {
      if (key.includes("uploadImages")) {
        uploadImages.push(request.payload[key]);
      }
    });

    context.uploadImages = uploadImages;

    return request;
  }
  return request;
};

module.exports = { after, before };
