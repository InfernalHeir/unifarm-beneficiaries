"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Unifarm_Beneficiaries extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   Unifarm_Beneficiaries.init(
      {
         beneficiaryAddress: DataTypes.STRING,
         vesting: DataTypes.STRING,
         category: DataTypes.STRING,
         claimTokens: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Unifarm_Beneficiaries",
      }
   );
   return Unifarm_Beneficiaries;
};
