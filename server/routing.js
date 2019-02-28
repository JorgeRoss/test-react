const express = require('express')
const router = express.Router()
const products = require('./routing/api/products')

router.use('/products', products)

module.exports = router