const AdminBro = require("admin-bro");

const {
  before: uploadBeforeHook,
  after: uploadAfterHook,
} = require("../actions/upload-image.hook");

const {
  before: multiUploadBeforeHook,
  after: multiUploadAfterHook,
} = require("../actions/upload-images.hook");

const {
  before: setCategoriesBeforeHook,
  after: setCategoriesAfterHook,
} = require("../actions/set-category.hook");

const hideInList = {
  show: true,
  edit: true,
  list: false,
  filter: false,
};

const action = {
  before: async (request, context) => {
    let modifiedRequest = await setCategoriesBeforeHook(request, context);
    modifiedRequest = await uploadBeforeHook(modifiedRequest, context);
    return multiUploadBeforeHook(modifiedRequest, context);
  },
  after: async (response, request, context) => {
    let modifiedResponse = await setCategoriesAfterHook(
      response,
      request,
      context
    );
    modifiedResponse = await uploadAfterHook(
      modifiedResponse,
      request,
      context
    );
    return multiUploadAfterHook(modifiedResponse, request, context);
  },
};

module.exports = {
  properties: {
    name: {
      position: 1,
    },
    uploadImage: {
      position: 2,
      components: {
        edit: AdminBro.bundle("../components/upload-image.edit.jsx"),
        list: AdminBro.bundle("../components/upload-image.list.jsx"),
      },
    },
    title: {
      position: 3,
      isVisible: hideInList,
    },
    subtitle: {
      position: 4,
      isVisible: hideInList,
    },
    text: {
      position: 5,
      type: "richtext",
      isVisible: hideInList,
    },
    link: {
      position: 6,
      isVisible: hideInList,
    },
    uploadImages: {
      components: {
        edit: AdminBro.bundle("../components/upload-images.edit.jsx"),
      },
      isVisible: hideInList,
      position: 7,
    },
    Categories: {
      components: {
        edit: AdminBro.bundle("../components/categories.edit.jsx"),
      },
    },
    previewImage: {
      isVisible: false,
    },
    images: {
      isVisible: false,
    },
  },
  actions: {
    new: action,
    edit: action,
    show: {
      isVisible: false,
    },
  },
};
