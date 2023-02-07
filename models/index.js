const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Product.belongsToMany(Tag, { through: "product_tag" });
Tag.belongsToMany(Product, { through: "product_tag" });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
