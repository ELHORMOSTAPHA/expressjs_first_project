'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
const sequelize=require('../../config/database');
module.exports =sequelize.define('user',{
  id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userType: {
        type: Sequelize.ENUM('0','1','2')
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }, 
      deletedAt: {
        type: Sequelize.DATE
      }
},{
  paranoid:true,
  modelName:"user"
})