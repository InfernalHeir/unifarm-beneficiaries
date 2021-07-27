"use strict";

//const ORO_EARLY_ADOPTERS_1000 = require("../json/ORO_EARLY_ADOPTERS_1000.json");
//const ORO_EARLY_ADOPTERS_5000 = require("../json/ORO_EARLY_ADOPTERS_5000.json");

const UNIFARM_STAKERS = require("../json/Unifarm_Stakers.json");
const _ = require("lodash");

const mergedAll = _.concat(/* ORO_EARLY_ADOPTERS_1000, ORO_EARLY_ADOPTERS_5000, */ UNIFARM_STAKERS);

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert("beneficiaries", mergedAll, {});
   },

   down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete("beneficiaries", null, {});
   },
};
