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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        muscle_group_focus: {

        },
        exercise_1: {
            type: DataTypes.STRING,
        },
        exercise_2: {
            type: DataTypes.STRING,
        },
        exercise_3: {
            type: DataTypes.STRING,
        },
        exercise_4: {
            type: DataTypes.STRING,
        },
        exercise_5: {
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