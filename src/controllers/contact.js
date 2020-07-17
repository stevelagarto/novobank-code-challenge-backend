const contact = require('../models/contact')

exports.getAll = (req, res) => {
  res.json(contact.getAll())
}

exports.post = (req, res) => {
  contact.set(req.body)
  res.sendStatus(200)
}
