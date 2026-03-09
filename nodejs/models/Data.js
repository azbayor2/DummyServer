import Sequelize from "sequelize";

export default (sequelize) => {
  class Data extends Sequelize.Model {}
  Data.init(
    {
      comment: Sequelize.DataTypes.STRING(255),
    },
    {
      sequelize,
      modelName: "Data",
      tableName: "data",
    },
  );

  return Data;
};
