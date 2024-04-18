const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class User extends Model {

    static async findUser(email, name, lastname){
        try {
            const user = await User.findByPk(email)
            return user ? user : null;
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

User.init({
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'User'
});

module.exports = User