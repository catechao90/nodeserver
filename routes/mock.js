var express = require('express')
var router = express.Router()
var jsonHandle = require('../common/jsonMiddleware.js')
var cors = require('cors')

router.use(cors())

router.get('/', function (req, res, next) {
  res.send('mock data server start')
})

router.use(jsonHandle)

module.exports = router
