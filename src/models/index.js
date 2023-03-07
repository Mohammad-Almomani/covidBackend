"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const records = require("./records.model");

const POSTGRES_URL =
  process.env.DATABASE_URL ||
  "postgresql://postgres:1312@localhost:5432/postgres";

// const sequelizeOption = {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// };

const sequelize = new Sequelize(POSTGRES_URL /*, sequelizeOption*/);
const recordsModel = records(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  records: recordsModel,
};