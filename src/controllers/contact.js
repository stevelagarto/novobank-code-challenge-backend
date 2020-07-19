const { Contact } = require('../models')

exports.getAll = async (req, res) => {
  try {
    const contacts = await Contact.findAll()
    return res.status(200).json({ contacts })
  } catch (error) {
    return res.status(500).json({ error: error.message })
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
