const { Router } = require("express");
const { Project, Category } = require("../models");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll({
      attributes: ["id", "title", "previewImage"],
      include: [
        {
          model: Category,
          attributes: ["name", "title"],
          through: { attributes: [] },
        },
      ],
      order: [
        ["sort", "ASC"],
        ["id", "DESC"],
      ],
    });

    res.json(projects);
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findOne({
      attributes: ["title", "subtitle", "text", "link", "images"],
      where: { id },
    });

    res.json(project);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
