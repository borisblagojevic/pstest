import {sequelize} from './SequelizePool';
import {DataTypes, Op} from 'sequelize';
import {NextFunction, Request, Response} from "express";

const Actor = sequelize.define(
    "actor",
    {
        actor_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
        },
        full_name: {
            type: DataTypes.VIRTUAL,
            get() {
                // @ts-ignore
                return `${this.first_name} ${this.last_name}`;
            }
        }
    },
    {
        // @ts-ignore
        sequelize,
        freezeTableName: true,
        timestamps: false
    });

export const getPageActor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.locals.data = await Actor.findAll({
        attributes: ['actor_id', 'first_name', 'last_name', 'full_name'],
        limit: res.locals.limit,
        where: {
            actor_id: {
                [Op.gte]: res.locals.cursor
            }
        }
    });

    next();
}

export const getActor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.locals.data = await Actor.findAll({where: {actor_id: {[Op.gte]: req.params.id}}});

    next();
}

export const createActor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const a = await Actor.create({first_name: req.body.first_name, last_name: req.body.last_name});

    res.status(201).send({"success": true, data: a});
}

export const deleteActor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const a = await Actor.destroy({where: {actor_id: {[Op.gte]: req.params.id}}});

    res.locals.data = a;

    next();
}