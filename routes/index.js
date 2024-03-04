const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uniqid =require('uniqid');
const htmlRoute =require('./htmlRoute');
const apiRoutes = require('./apiRoutes');

//http://localhost:3001/api
router.use('/api', apiRoutes)
router.use('/', htmlRoute)
module.exports = router 

