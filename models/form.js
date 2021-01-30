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
        pin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    Forms.associate = (models) => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Forms.belongsTo(models.Categories, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
      return Forms;
    };
    