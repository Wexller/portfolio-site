"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Projects", [
      {
        title: "КузбассКадастр",
        subtitle: "КузбассКадастр - снижение кадастровой стоимости земли",
        previewImage:
          "/uploads/2020-10-08/300c70b6a12bf314a831a59f2579542f-resized.jpg",
        text:
          "КузбассКадастр - решение вопросов земельных отношений, недвижимости и строительства в Кемеровской области и в других регионах России",
        images: [
          "/uploads/2020-10-08/0560a8e32f1f02eb13635895f960c236-resized.jpg",
          "/uploads/2020-10-08/6fe232beed315c091d87bec2afe2b347-resized.jpg",
          "/uploads/2020-10-08/ff77cafa352f565db9caf4515c2ae358-resized.jpg",
          "/uploads/2020-10-08/5cbfcdce75950c8c299378006fcb1299-resized.jpg",
        ],
        link: "//kuzbass-kadastr.ru/",
        sort: 100,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Intelion",
        subtitle: "Intelion Mining",
        previewImage:
          "/uploads/2020-10-08/0095037501a3797ac54a4e105e16d82a-resized.jpg",
        images: [
          "/uploads/2020-10-08/0d2b40e4dadbabf4a5143666959f5bd4-resized.jpg",
          "/uploads/2020-10-08/40869b5ed8bd73a99eeee3ab52194619-resized.jpg",
          "/uploads/2020-10-08/f5f47a4eb534c920b1c84033b16f0f00-resized.jpg",
          "/uploads/2020-10-08/1c6afbd7e424557ba23479642837cee4-resized.jpg",
          "/uploads/2020-10-08/7879eb72a5c9acc7fa98baf36a9bf59d-resized.jpg",
        ],
        text:
          "Компания Intelion работает в сфере майнинга криптовалют. Она предоставляет комплексные решения для майнинга, включая размещение оборудования на хостинге, прямые поставки оборудования.",
        link: "//intelionmine.ru/",
        sort: 100,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "СМК",
        subtitle: "Современная машиностроительная компания",
        previewImage:
          "/uploads/2020-10-08/0e129a3fc6343952c5990c248d5e251a-resized.jpg",
        images: [
          "/uploads/2020-10-08/bc482d2b0fbdc0dc64d88a8b55b423a6-resized.jpg",
          "/uploads/2020-10-08/0642be83ce01f6eadfbbaa9071a27972-resized.jpg",
          "/uploads/2020-10-08/55962dcd69c5c0583bcce5eb77ddea60-resized.jpg",
          "/uploads/2020-10-08/66756a56eb5bc6367476e9cce6f19890-resized.jpg",
          "/uploads/2020-10-08/4a36cea9473b39f33485efbd48bf2233-resized.jpg",
        ],
        text:
          "СМК решает технологические задачи заказчиков, поставляет оборудование, инструменты и оснастку. Помогает предприятиям готовить специалистов, осуществляет гарантийное и постгарантийное обслуживание",
        link: "http://smkom.ru/",
        sort: 100,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Юрпроект",
        subtitle: "Коллегия адвокатов «Юрпроект»",
        previewImage:
          "/uploads/2020-10-08/fd7557e46629afd3f641aa11ebb0e0c0-resized.jpg",
        images: [
          "/uploads/2020-10-08/2f8ea89e404d4120be12052f399b548c-resized.jpg",
          "/uploads/2020-10-08/08e79e4f0cb099668f75092ab0a0d8da-resized.jpg",
          "/uploads/2020-10-08/064686ae091413beff9b3fcd9fe09dcd-resized.jpg",
          "/uploads/2020-10-08/f3efb83a4ba287255fd101ca5223d55f-resized.jpg",
        ],
        text:
          "Юридическая компания из Сибири, представленная в Москве и Санкт-Петербурге. Специализируется в вопросах сопровождения бизнеса и юридической защиты частных лиц по имущественным спорам",
        link: "http://jurproject.ru/",
        sort: 100,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Аукционы",
        subtitle: "ЕВРАЗ Аукционы",
        previewImage:
          "/uploads/2020-10-08/a3b3ae45c9dac2c4db3375de60da8498-resized.jpg",
        images: [
          "/uploads/2020-10-08/1793ac633c8bf292606fe04fff112d04-resized.jpg",
          "/uploads/2020-10-08/8ecaf6b559fb5423e5de58eba58150c3-resized.jpg",
          "/uploads/2020-10-08/af938cca6bfcabb5753791a551e9a457-resized.jpg",
          "/uploads/2020-10-08/ee71b2c17a9c735b05e8b9393aaf35fa-resized.jpg",
        ],
        text:
          "Система проведения торгов в режиме реального времени в формате аукциона для реализации лома цветных и легированных металлов АО «ЕВРАЗ НТМК» и АО «ЕВРАЗ КГОК»",
        link: "http://auction.evraz.com/",
        sort: 100,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {});
  },
};
