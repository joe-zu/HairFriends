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
    // Forms.associate = (models) => {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Forms.belongsTo(models.Categories, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };
      return Forms;
    };
    