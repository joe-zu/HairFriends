'use strict';

module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Categories.associate = models => {
    // associations can be defined here
    Categories.hasMany(models.Forms, {
      onDelete: "cascade"
    });
  }
  return Categories;
};