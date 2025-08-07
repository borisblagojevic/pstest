import dotenv from 'dotenv'
import express from 'express';

dotenv.config({path: '../../.env'});

const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    process.env.POSTGRES_DB_NAME,
    process.env.POSTGRES_USERNAME,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
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

async function test() {

    try {
        await sequelize.authenticate();

        console.log("Sequelize authenticated successfully.");
    } catch (error) {
        console.error(error);
    }

    const Actor = sequelize.define("actor", {
        actor_id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_update: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
        {
            sequelize,
        });
    console.log(Actor === sequelize.models.Actor);


}

test();
