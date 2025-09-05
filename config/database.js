const {Sequelize}=require('sequelize')
const env=process.env.NOD_ENV || "development"
const config=require('./config')
const sequelize=new Sequelize(config[env]);
module.exports=sequelize