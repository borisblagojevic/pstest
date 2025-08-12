import {Sequelize, DataTypes} from "sequelize";

export const sequelize = new Sequelize(
// @ts-ignore
    process.env.POSTGRES_DB_NAME,
    process.env.POSTGRES_USERNAME,
    process.env.POSTGRES_PASSWORD,
    {
        // host: process.env.POSTGRES_HOST,
        host: 'db',
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

export const testConnection = async (): Promise<void> => {
    try {
        await sequelize.authenticate();

        console.log("Sequelize authenticated successfully.");
    } catch (error) {
        console.error(error);
    }
};
