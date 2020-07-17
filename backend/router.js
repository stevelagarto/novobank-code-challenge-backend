const router = require('express').Router()

const contact = require('./controllers/contact.js')

router.get('/contacts', contact.getAll)
router.post('/contacts', contact.post)

module.exports = router
