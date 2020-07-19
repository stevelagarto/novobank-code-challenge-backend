'use strict'
const { DB_NAME, ADMIN_DB, PASS_DB, HOST, DIALECT_DB } = require('./config')
const Sequelize = require('sequelize')
const ContactModel = require('./contact')

const sequelize = new Sequelize(DB_NAME, ADMIN_DB, PASS_DB, {
  host: HOST,
  dialect: DIALECT_DB,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Contact = ContactModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!')
  })

module.exports = {
  Contact
}
