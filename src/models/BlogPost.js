const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts'
    });
    BlogPost.associate = (model) => {
        BlogPost.belongsTo(model.User, {
            foreignKey: 'user_id',
            as: 'user',
        })
    }
    return BlogPost;
};

module.exports = BlogPost;