const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//setups up table info for database
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    com_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "user",
    //     key: "id",
    //   },
    // },
    // blog_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "blog",
    //     key: "id",
    //   },
    // },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
