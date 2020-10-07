const { Router } = require("express");
const { Project, Category } = require("../models");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "name", "title"],
      include: {
        model: Project,
        attributes: ["id"],
        through: {
          attributes: [],
        },
      },
    });

    const newCategories = categories.map((item) => {
      const { Projects: projectsArr } = item["dataValues"];

      const newProjectsArr = projectsArr.map((project) => project.id);

      return {
        ...item["dataValues"],
        Projects: newProjectsArr,
      };
    });

    res.json(newCategories);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
