"use strict"

const beneficiaryList = require("../beneficiary.json")
const { toWei } = require("web3-utils")

const jsonModule = beneficiaryList.map((item) => {
   return {
      beneficiaryAddress: item.userWalletAddress,
      vestAddress: "0x0000000000000000000000000000000000000000",
      claimTokens: toWei(String(item.claimToken)),
      createdAt: new Date(),
      updatedAt: new Date(),
   }
})

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert("Beneficiaries", jsonModule, {})
   },

   down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete("People", null, {})
   },
}
