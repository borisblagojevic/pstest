import {sequelize} from "./SequelizePool";
import {DataTypes, Op} from "sequelize";
import {NextFunction, Request, Response} from "express";
import {Language} from "./Language";


// film_id | title | description | release_year | language_id | rental_duration | rental_rate | length | replacement_cost | rating | last_update | special_features

export const Film = sequelize.define(
    "film",
    {
        film_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: '#db-0001 description'
        },
        release_year: {
            type: DataTypes.DATE,
            allowNull: false
        },
        language_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rental_duration: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        rental_rate: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.00
        },
        length: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        replacement_cost: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.00
        },
        rating: {
            type: DataTypes.CHAR(6),
            defaultValue: 'PG'
        },
        last_update: {
            type: DataTypes.DATE
        },
        special_features: {
            type: DataTypes.STRING,
            defaultValue: ''
        }
    },
    {
        // @ts-ignore
        sequelize,
        freezeTableName: true
    }
);

Film.hasOne(Language, {foreignKey: 'language_id'});
Language.belongsTo(Film);

export const getPageFilm = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.locals.data = await Film.findAll({
        attributes: ['film_id', 'title', 'last_update'],
        limit: res.locals.limit,
        where: {
            film_id: {
                [Op.gte]: res.locals.cursor
            }
        }
    });

    next();
}

export const getMovieById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json(await Film.findOne({
        // attributes: ['film_id', 'title', 'description', 'release_year', 'language_id', 'rental_duration', 'rental_rate', 'length', 'replacement_cost', 'rating', 'last_update','special_features'],
        attributes: ['film_id','language_id',],
        where:{
            film_id: req.params.film_id
        },
        include: Language
    }));
}