import React from "react";
import { Box } from "admin-bro";

const Edit = ({ record }) => {
  const srcImg = record.params["previewImage"];

  return (
    <Box marginBottom="xxl">
      {srcImg ? (
        <img src={srcImg} style={{ maxWidth: "100px" }} />
      ) : (
        "Изображения нет"
      )}
    </Box>
  );
};

export default Edit;
