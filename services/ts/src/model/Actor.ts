import {sequelize} from './SequelizePool';
import {DataTypes} from 'sequelize';

const Actor = sequelize.define(
    "actor",
    {
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
        // @ts-ignore
        sequelize,
        freezeTableName: true
    });

//     const actors = await Actor.findAll({
//         attributes: ['first_name', 'last_name'],
//         offset: 0,
//         limit: 10
// });
// console.log(JSON.stringify(actors));