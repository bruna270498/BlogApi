const Category = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories'
    })
    Category.associate = (model) => {
        Category.hasMany(model.posts_categories,{
            foreignKey: 'category_id', as: 'Category'
        })
    };
    return Category;
};
module.exports = Category;