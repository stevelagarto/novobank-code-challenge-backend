const router = require('express').Router()

const contact = require('./controllers/contact')

router.get('/contacts', contact.findAll)
router.post('/contacts', contact.createContact)

module.exports = router
