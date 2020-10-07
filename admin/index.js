const AdminBro = require("admin-bro");
const { Project, Category, User, Feedback } = require("../models");
const locale = require("./locale");
const {
  UserResource,
  ProjectResource,
  CategoryResource,
  FeedbackResource,
} = require("./resources");

const sidebarGroups = {
  user: {
    name: "Пользователи",
    icon: "User",
  },
  content: {
    name: "Контент",
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
    {
      resource: Feedback,
      options: {
        ...FeedbackResource,
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
