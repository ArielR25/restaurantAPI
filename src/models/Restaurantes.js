const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('restaurantes', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.TEXT,
        },
        site: {
            type: DataTypes.TEXT,
        },
        email: {
            type: DataTypes.TEXT,
        },
        phone: {
            type: DataTypes.TEXT,
        },
        street: {
            type: DataTypes.TEXT,
        },
        city: {
            type: DataTypes.TEXT,
        },
        state: {
            type: DataTypes.TEXT,
        },
        lat: {
            type: DataTypes.FLOAT,
        },
        lng: {
            type: DataTypes.FLOAT,
        }
    });
};