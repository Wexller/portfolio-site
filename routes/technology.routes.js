const { Router } = require("express");
const { Technology } = require("../models");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Technology.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      order: [["sort", "ASC"]],
    });

    res.json(categories);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
