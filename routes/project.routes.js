const { Router } = require("express");
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

module.exports = router;
