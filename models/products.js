'use strict';

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        productLink: {
            type: DataTypes.STRING,
            allowNull: false,
            isUrl: true         
        }
    });
      return Products;
    };
    