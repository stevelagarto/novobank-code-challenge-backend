const { Contact } = require('../models')

exports.getAll = async (req, res) => {
  try {
    const listOFContacts = await Contact.findAll()
    res.status(200)
    return res.json({ contacts: listOFContacts })
  } catch (error) {
    res.status(500)
    return res.json({ error: error.message })
  }
}

exports.post = async (req, res) => {
  try {
    const post = await Contact.create(req.body)
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
