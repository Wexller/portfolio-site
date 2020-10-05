const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const AdminInterface = require("@admin-interface/express");

const app = express();
app.use(express.json({ extended: true }));

app.use("/api/project", require("./routes/project.routes"));

app.get("/", async (req, res) => {
  return res.send("INDEX");
});

const PORT = process.env.PORT || 5000;

const adminInterface = new AdminInterface();
adminInterface.setConfigFile(__dirname, "admin-interface.yaml");
app.use("/admin", adminInterface.middleware());

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});

module.exports = app;
