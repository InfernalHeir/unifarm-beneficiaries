// >> this file is using for multiple configuration for express server

export const dbConfig = {
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   host: process.env.DB_HOSTNAME,
   dialect: "postgres",
}
