const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// TODO: YOUR CODE HERE
class Comment extends Model {}

Comment.init(
    {
    
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
{
    sequelize,
}
)

module.exports = Comment;
