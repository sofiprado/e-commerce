const apiService = require('../services/apiService')

let self = {};

self.getApi = function (req, res) {

  const query = req.query['q']
  console.log(query, req.query)

  apiService.productsApi(query).then(function (data) {
  
    const products = data.results
    //console.log(products)
     
    let selectedItems = []
   
    for (var i = 0; i < products.length; i++) {  
      selectedItems.push({
        categories: [],
        items: {
          id: products[i].id,
          title: products[i].title,
        },
        //falta category_id
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
    //para un array dentro de un array seria arr1[indice].arr2[indice]
    //pero cuando hago this.state.productos[2] me salta undefined .id  
  }).catch(function (err) {
    console.log(err);
 })
}

module.exports = self;
