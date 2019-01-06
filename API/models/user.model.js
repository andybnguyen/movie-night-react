const sequelize = require('sequelize');



module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING
    },
  })
  return Users
}