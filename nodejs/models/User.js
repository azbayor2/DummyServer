import Sequelize from "sequelize";

export default (sequelize) => {
  class User extends Sequelize.Model {}
  User.init(
    {
      name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
    },
  );

  return User;
};
