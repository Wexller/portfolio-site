const path = require("path");
const fs = require("fs");
const dateFormat = require("dateformat");
const { makeMd5Hash } = require("../util");
const sharp = require("sharp");
const { PREVIEW_IMAGE_RESIZE } = require("../constants");

const after = async (response, request, context) => {
  const { record, uploadImage } = context;

  if (record.isValid() && uploadImage) {
    const newFileName = makeMd5Hash(uploadImage.name);
    const today = dateFormat(new Date(), "yyyy-mm-dd");
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
      .resize(PREVIEW_IMAGE_RESIZE.width, PREVIEW_IMAGE_RESIZE.height)
      .jpeg({ quality: 90 })
      .toFile(resizedPath, (err, resizeImage) => {
        if (err) {
          console.log(err);
        } else {
          console.log(resizeImage);
        }
      });

    await record.update({ previewImage: `/${resizedPath}` });
  }
  return response;
};

const before = async (request, context) => {
  if (request.method === "post") {
    const { uploadImage, ...otherParams } = request.payload;

    context.uploadImage = uploadImage;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };
