const apiService = require('../services/apiService')

let self = {};

//SELECT DATA FROM SEARCH RESULT
self.getApi = function (req, res) {

  const query = req.query['q']
  console.log(query, req.query)

  apiService.productsApi(query).then(function (data) {
  
    const products = data.results 
    let selectedItems = []
   
    for (var i = 0; i < products.length; i++) {  
      selectedItems.push({
        categories: [],
        items: {
          id: products[i].id,
          title: products[i].title,
        },
        price: {
          currency: products[i].currency_id,
          amount: products[i].price,
          decimals: ''
        },
        product: {
          picture: products[i].thumbnail,
          condition: products[i].condition,
          free_shipping: products[i].shipping.free_shipping,
          address: products[i].address.state_name,
          city: products[i].address.city_name,
          sold_quantity: products[i].sold_quantity,
          description: products[i].title
      }}) 
    }
    
    res.json({ 
      author: {
      name: 'Sofía',
      lastname: 'Prado',
    },
    myProducts: selectedItems 
  })
  }).catch(function (err) {
 })
}

module.exports = self;
