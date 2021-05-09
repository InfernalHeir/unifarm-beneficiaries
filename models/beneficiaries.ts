"use strict"
const { Model } = require("sequelize")
export default (sequelize, DataTypes) => {
   class Beneficiaries extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   Beneficiaries.init(
      {
         beneficiaryAddress: DataTypes.STRING,
         vestAddress: DataTypes.STRING,
         claimTokens: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Beneficiaries",
      }
   )
   return Beneficiaries
}
