const contact = require('../models/contact.js')

exports.getAll = (req, res) => {
  res.json(contact.getAll())
}

exports.post = (req, res) => {
  contact.set(req.body)
  res.sendStatus(200)
}
