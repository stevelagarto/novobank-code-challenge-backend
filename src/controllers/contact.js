const db = require('../models')

exports.getAll = async (req, res) => {
  try {
    res.body = await db.Contact.findAll()
  } catch (error) {
    res.status = 500
  }
}

exports.post = async (req, res) => {
  const contact = req.body
  try {
    await db.Contact.create({
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email,
      phone: contact.phone
    })
    res.status = 200
  } catch (error) {
    res.status = 500
  }
}
