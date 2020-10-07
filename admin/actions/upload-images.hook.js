const path = require("path");
const fs = require("fs");
const dateFormat = require("dateformat");
const { makeMd5Hash } = require("../util");

const after = async (response, request, context) => {
  const { record, uploadImages } = context;

  if (record.isValid() && uploadImages) {
    const images = [];

    for (const uploadImage of uploadImages) {
      const newFileName =
        makeMd5Hash(uploadImage.name) + path.extname(uploadImage.name);
      const today = dateFormat(new Date(), "yyyy-mm-dd");

      const filePath = path.join("uploads", today, newFileName);

      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      await fs.promises.rename(uploadImage.path, filePath);

      const correctedFilepath = "/" + filePath.replace(/\\/g, "/");

      images.push(correctedFilepath);
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
