import { Sequelize } from "sequelize"
import { dbConfig } from "../config"

export const sequelize = new Sequelize(
   dbConfig.database,
   dbConfig.username,
   dbConfig.password,
   dbConfig
)
