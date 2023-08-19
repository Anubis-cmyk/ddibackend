const express = require("express");
const router = express.Router();
const {getItems,addItem} = require('./Item_controller');

router.route('/getItems').get(getItems);
router.route('/addItem').post(addItem);

module.exports = router;