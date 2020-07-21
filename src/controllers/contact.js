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
    const findEmail = await Contact.findOne({ where: { email: req.body.email } })

    if (req.body.first_name === '' || req.body.last_name === '' || req.body.email === '' || req.body.phone === '') throw new Error('All fields must have a value')

    if (findEmail !== null) {
      res.status(400)
      throw new Error('Email already exists')
    }
    const createdContact = await Contact.create(req.body)
    res.status(201)

    return res.json(createdContact)
  } catch (error) {
    res.status(500)

    return res.json({ error: error.message })
  }
}
