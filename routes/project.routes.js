const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const { Project, Category } = require("../models");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Category,
          attributes: ["name", "title"],
          through: { attributes: [] },
        },
      ],
    });

    res.json(projects);
  } catch (e) {
    console.log(e);
  }
});

router.get("/new", async (req, res) => {
  try {
    // const project = await Project.create({
    //   name: "Тест",
    //   preview_image: "sdfsf456456.png",
    //   images: ["132", "789", "174"],
    //   title: "Некий заголовок",
    //   subtitle: "Некий подзаголовок",
    //   text: "Текст",
    //   link: "Ссылка",
    //   // categories: [{ CategoryId: 14 }, { CategoryId: 16 }],
    // });

    // console.log(typeof project.id);

    // await project.setCategories([2, 3]);

    // console.log(project.id);
    // res.send("OK");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
