const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        muscle_group: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_1: {
            type: DataTypes.STRING,
        },
        item_2: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout',
    }
)

module.exports = Workout