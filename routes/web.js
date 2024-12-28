const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers'); // Updated

router.get('/', homeController);

module.exports = router;