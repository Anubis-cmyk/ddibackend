const express = require("express");
const router = express.Router();
const addMessage = require('./Message_controller');

router.route('/addMessage').post(addMessage);

module.exports = router;