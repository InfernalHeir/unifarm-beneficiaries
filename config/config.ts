require("dotenv").config();

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
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "postgres",
   },
};

export default dbConfig;
