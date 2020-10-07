const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const { Feedback } = require("../models");
const router = Router();

router.post(
  "/",
  [
    check("email", "Некорректный email").isEmail(),
    check("name", "Требуется имя").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректный данные формы",
        });
      }

      const { name, email, message } = req.body;

      Feedback.create({ name, email, message });

      res.status(201).json({ message: "Сообщение успешно отправлено" });
    } catch (e) {
      console.log(e);
    }
  }
);

module.exports = router;
