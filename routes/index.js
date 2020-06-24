const express = require('express');

const router = express.Router();
const todoController= require('../controller/todoController');

//for displaying home page
router.get('/',todoController.home);

//for todos related functionality-add,delete
router.use('/todos',require('./todo'));

module.exports= router;