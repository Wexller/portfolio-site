import React, { useState, useEffect, useCallback } from "react";
import { Box, Label } from "admin-bro";
import CheckboxGroup from "react-checkbox-group";

const Edit = ({ record, property, onChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    onChange(property.name, selectedCategories);
  }, [selectedCategories]);

  const fetchCategories = useCallback(async () => {
    const response = await fetch("/api/category");
    const categoriesArr = await response.json();
    setCategories(categoriesArr);
    initSelectedCategories(categoriesArr);
  }, []);

  const initSelectedCategories = (categoriesArr) => {
    const selectedCats = [];
    for (const category of categoriesArr) {
      if (category["Projects"].includes(record.id)) {
        selectedCats.push(category.id);
      }
    }

    if (selectedCats.length) {
      setSelectedCategories(selectedCats);
    }
  };

  return (
    <Box>
      <Label>{property.label}</Label>
      <CheckboxGroup
        name="fruits"
        value={selectedCategories}
        onChange={setSelectedCategories}
      >
        {(Checkbox) =>
          categories.map((item) => (
            <label style={{ marginRight: "15px" }} key={item.id}>
              <Checkbox value={item.id} /> {item.title}
            </label>
          ))
        }
      </CheckboxGroup>
    </Box>
  );
};

export default Edit;
