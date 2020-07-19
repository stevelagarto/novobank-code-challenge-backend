const { Contact } = require('../models')

exports.findAll = async (req, res) => {
  try {
    const listOFContacts = await Contact.findAll()
    res.status(200)
    return res.json({ contacts: listOFContacts })
  } catch (error) {
    res.status(500)
    return res.json({ error: error.message })
  }
}

exports.create = async (req, res) => {
  try {
    const createdContact = await Contact.create(req.body)
    return res.status(201).json({
      createdContact
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
