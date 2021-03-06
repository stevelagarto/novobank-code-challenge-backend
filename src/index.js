'use strict'

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const router = require('./router')

app.use(cors())

app.use(bodyParser.json())

app.use(router)

const port = 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
