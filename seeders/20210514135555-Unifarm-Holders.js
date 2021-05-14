"use strict";

const beneficiary = require("../json/beneficiary.json");
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert("Unifarm_Beneficiaries", beneficiary, {});
   },

   down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete("Unifarm_Beneficiaries", null, {});
   },
};
