import React from "react";
import { Label, Box, DropZone, DropZoneItem } from "admin-bro";

const Edit = ({ property, onChange, record }) => {
  const handleDropZoneChange = (files) => {
    onChange(property.name, files[0]);
  };

  const uploadedPhoto = record.params.previewImage;
  const photoToUpload = record.params[property.name];

  return (
    <Box marginBottom="xxl">
      <Label>{property.label}</Label>
      <DropZone onChange={handleDropZoneChange} />
      {uploadedPhoto && !photoToUpload && <DropZoneItem src={uploadedPhoto} />}
    </Box>
  );
};

export default Edit;
