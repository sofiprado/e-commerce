const productService = require('../services/productService')


let self = {};

let createResponse = {}

self.getProduct = function (req, res) {
  let product = req.params.id
 // console.log(product, 'product que le paso al service')

 productService.productDetails(product).then(function (details) {
  console.log('THE DETAILS TITLE', details)

  
      createResponse = {
      title: details.title,
      currency: details.currency_id,
      price: details.price,
      sold: details.sold_quantity,
      image: details.thumbnail,
      quantity: details.available_quantity,
      condition: details.condition,
    }
  
}).then(function(data) {
  productService.productDescript(product).then(function (description) {

 const result = {
   item: createResponse,
   description: description
 }
  res.json(result)
 //console.log(result)
})
})
}
module.exports = self;
