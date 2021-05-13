"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Beneficiaries", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         beneficiaryAddress: {
            type: Sequelize.STRING,
         },
         vestAddress: {
            type: Sequelize.STRING,
         },
         claimTokens: {
            type: Sequelize.STRING,
         },
         jobStatus: {
            type: Sequelize.INTEGER,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Beneficiaries");
   },
};
