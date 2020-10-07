const AdminBro = require("admin-bro");
const { Project, Category, User } = require("../models");
const locale = require("./locale");
const {
  UserResource,
  ProjectResource,
  CategoryResource,
} = require("./resources");

const sidebarGroups = {
  user: {
    name: "Пользователи",
    icon: "User",
  },
  content: {
    name: "Категории",
    icon: "Types",
  },
};

const adminBro = new AdminBro({
  rootPath: "/admin",
  loginPath: "/admin/login",
  resources: [
    {
      resource: User,
      options: {
        ...UserResource,
        parent: sidebarGroups.user,
      },
    },
    {
      resource: Project,
      options: {
        ...ProjectResource,
        parent: sidebarGroups.content,
      },
    },
    {
      resource: Category,
      options: {
        ...CategoryResource,
        parent: sidebarGroups.content,
      },
    },
  ],
  branding: {
    companyName: "Портфолио - Admin Panel",
    softwareBrothers: false,
  },
  locale,
});
module.exports = adminBro;
