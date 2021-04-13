const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// TODO: YOUR CODE HERE
class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }

);
module.exports = Post;
