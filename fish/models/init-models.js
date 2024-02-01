import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_fishs from  "./tbl_fishs.js";

export default function initModels(sequelize) {
  const tbl_fishs = _tbl_fishs.init(sequelize, DataTypes);


  return {
    tbl_fishs,
  };
}
