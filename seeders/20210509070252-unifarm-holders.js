"use strict";

const beneficiaryList = require("../json/beneficiary.json");

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert("Beneficiaries", beneficiaryList, {});
   },

   down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete("Beneficiaries", null, {});
   },
};
