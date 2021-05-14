require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const dbConfig = {
   dev: {
      username: "postgres",
      password: "root",
      database: "Ufarm_Holders",
      host: "127.0.0.1",
      dialect: "postgres",
   },
   test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "postgres",
   },
   prod: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: "postgres",
   },
};

module.exports = dbConfig;
