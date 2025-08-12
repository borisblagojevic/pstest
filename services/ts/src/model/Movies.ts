import {sequelize} from "./SequelizePool";
import {DataTypes} from "sequelize";

// film_id | title | description | release_year | language_id | rental_duration | rental_rate | length | replacement_cost | rating | last_update | special_features

const Film = sequelize.define(
    "film",
    {
        film_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
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
        freezeTableName:
            true
    }
);

export const getPageFilm = async () : Promise<void> => {
 const films = await Film.findAll({
     attributes: ['film_id', 'title', 'last_update'],
        offset: 0,
        limit: 10
 });

    console.log(films); // TODO
}