const express = require("express");
const path = require("path");

const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroSequelize = require("admin-bro-sequelizejs");
const { authenticate, sessionStorage } = require("./admin/util");
AdminBro.registerAdapter(AdminBroSequelize);

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/project", require("./routes/project.routes"));
app.use("/api/category", require("./routes/catrgory.routes"));
app.use("/api/feedback", require("./routes/feedback.routes"));
app.use("/api/technology", require("./routes/technology.routes"));

const PORT = process.env.PORT || 5000;

const adminPanel = require("./admin");
const router = AdminBroExpress.buildAuthenticatedRouter(
  adminPanel,
  {
    cookiePassword: "admin-panel-tutorial",
    authenticate,
  },
  null,
  sessionStorage
);
app.use(adminPanel.options.rootPath, router);
app.use(adminPanel.options.loginPath, router);
app.use("/uploads", express.static("uploads"));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});

module.exports = app;
