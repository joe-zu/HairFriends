'use strict';

module.exports = (sequelize, DataTypes) => {
    const Forms = sequelize.define('Forms', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
              }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 25]
              }
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 1500]
              }
        },
        publish: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        pin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    
      return Forms;
    };
    