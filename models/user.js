const sequelize = require("../config/sequelize");
const { Datatypes } = require("sequelize");
const { DB_TABLES } = require("../config/functionArguments");

const User = sequelize.define(
  DB_TABLES.USER,
  {
    id: {
      type: Datatypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Datatypes.STRING(20),
      allowNull: false,
    },
    lastName: {
      type: Datatypes.STRING(20),
      allowNull: false,
    },
    mobileNumber: {
      type: Datatypes.INTEGER(10),
      allowNull: false,
    },
    address: {
      type: Datatypes.STRING(50),
      allowNull: false,
    },
    createdAt: {
      type: Datatypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: Datatypes.DATE,
      allowNull: true,
    },
    deletedAt: {
      type: Datatypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: DB_TABLES.USER,
  }
);

module.exports = User;
