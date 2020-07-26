const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const Journal = sequelize.define('user', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date:{
            type: DataTypes.STRING,
            allowNull: false
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            types: DataTypes.INTEGER
        }
    })
    return Journal;
}