"use strict";

const Records = (sequelize, DataTypes) =>
  sequelize.define("covidRecords", {
    Country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TotalConfirmed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TotalDeaths: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TotalRecovered: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  });

module.exports = Records;