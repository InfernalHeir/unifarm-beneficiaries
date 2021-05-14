"use strict";

import { Model, Optional } from "sequelize/types";
import { DataTypes } from "sequelize";
import { db } from ".";

const sequelize = db.sequelize;

interface BeneficiaryAttributes {
   beneficiaryAddress: string;
   vestAddress: string;
   claimTokens: string;
   jobStatus: number;
}

interface BeneficiaryCreationAttributes
   extends Optional<BeneficiaryAttributes, "beneficiaryAddress"> {}

interface BeneficiaryInstance
   extends Model<BeneficiaryAttributes, BeneficiaryCreationAttributes>,
      BeneficiaryAttributes {}

export const BeneficiaryModel = sequelize.define("Beneficiary", {
   beneficiaryAddress: DataTypes.STRING,
   vestAddress: DataTypes.STRING,
   claimTokens: DataTypes.STRING,
   jobStatus: DataTypes.NUMBER,
});
