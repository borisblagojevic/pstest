import "dotenv/config";

// TODO dynamic import
module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "dvdrental_test",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "dvdrental_production",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
  },
};
