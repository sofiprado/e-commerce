var express = require('express');
var router = express.Router();

const apiController =  require('../controllers/apiController.js')
const productController =  require('../controllers/productController.js')


/* GET home page. */
router.get('/api/items', apiController.getApi)

router.get('/api/items/:id', productController.getProduct)


module.exports = router;
