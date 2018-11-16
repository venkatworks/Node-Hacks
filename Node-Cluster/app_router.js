var express = require('express');
var router = express.Router();
var reqRoutes = require('./src/routes/requirement.routes');

// all module noutes need to be added here
router.use('/requirement',reqRoutes)

module.exports = router