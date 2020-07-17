const router = require('express').Router()

const contact = require('./controllers/contact')

router.get('/contacts', contact.getAll)
router.post('/contacts', contact.post)

module.exports = router
