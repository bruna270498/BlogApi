const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,

    }, {
        timestamps: false,
        underscored: true,
        tableName: 'users'
    }, )
    User.associate = (model) => {
        User.hasMany(model.BlogPost, {
            foreignKey: 'user_id', as: 'blog_posts'
        })
    }
    return User;
};
module.exports = User;