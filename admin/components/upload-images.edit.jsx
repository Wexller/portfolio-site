import React from "react";
import { Label, Box, DropZone, DropZoneItem } from "admin-bro";

const Edit = ({ property, onChange, record }) => {
  const handleDropZoneChange = (files) => {
    onChange(property.name, files);
  };

  const uploadedImages = [];

  Object.keys(record.params).forEach((key) => {
    if (key.includes("images")) {
      uploadedImages.push(record.params[key]);
    }
  });

  const imagesToUpload = record.params[property.name];

  return (
    <Box marginBottom="xxl">
      <Label>{property.label}</Label>
      <DropZone onChange={handleDropZoneChange} multiple={true} />
      {uploadedImages &&
        !imagesToUpload &&
        uploadedImages.map((uploadedImage, idx) => (
          <DropZoneItem src={uploadedImage} key={idx} />
        ))}
    </Box>
  );
};

export default Edit;
