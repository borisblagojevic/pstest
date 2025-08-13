import {sequelize} from "./SequelizePool";
import {DataTypes, Op} from "sequelize";
import {NextFunction, Request, Response} from "express";
import {Film} from "./Movies";

export const Language = sequelize.define("language", {
        language_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_update: {
            type: DataTypes.DATE
        }
    },
    {
        // @ts-ignore
        sequelize,
        freezeTableName: true
    });