const { Project } = require("../../models");

const after = async (response, request, context) => {
  const { record, categories } = context;

  if (record.isValid() && categories) {
    const project = await Project.findOne({ where: { id: record.id() } });
    await project.setCategories(categories);
  }

  return response;
};

const before = async (request, context) => {
  if (request.method === "post") {
    const categories = [];

    Object.keys(request.payload).forEach((key) => {
      if (key.includes("Categories")) {
        categories.push(request.payload[key]);
      }
    });

    context.categories = categories;
    return request;
  }
  return request;
};

module.exports = { after, before };
