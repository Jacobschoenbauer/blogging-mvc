const User = require("./User");
const Blog = require("./Blog");
const Comm = require("./Comment")




User.hasMany(Blog, {
  foreignkey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comm, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.hasMany(Comm, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comm.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
}),

Comm.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})


module.exports = { User, Blog, Comm };
