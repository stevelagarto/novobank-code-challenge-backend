const { Contact } = require('../models')

exports.findAll = async (req, res) => {
  try {
    const listOfContacts = await Contact.findAll()
    res.status(200)
    return res.json(listOfContacts)
  } catch (error) {
    res.status(500)
    return res.json({ error: error.message })
  }
}

exports.createContact = async (req, res) => {
  try {
    const createdContact = await Contact.create(req.body)
    res.status(201)
    return res.json(
      createdContact
    )
  } catch (error) {
    res.status(500)
    return res.json({ error: error.message })
  }
}
