module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user', // Can be 'admin', 'moderator', etc.
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active', // Can be 'inactive', 'banned', etc.
      },
      is_deleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Can be 0 or 1
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: true, // Automatically adds createdAt and updatedAt fields
      hooks: {
        beforeUpdate: (user, options) => {
          user.updatedAt = new Date();
        },
      },
    }
  );

  return User;
};
