let self = {};

const rest = require('restler');

self.productDetails = function(product) { 
  const getDetail =  new Promise(function(resolve, reject) {
   
 rest.get('https://api.mercadolibre.com/items/' + product).on('complete', function(result) { 
 resolve(result) 
}).on('fail', function(error) {
  reject(error)
})
})
return getDetail
}

self.productDescript = function(product) { 
  const getDescript =  new Promise(function(resolve, reject) {
   
 rest.get('https://api.mercadolibre.com/items/' + product + '/description').on('complete', function(result) { 
 resolve(result) 
}).on('fail', function(error) {
  reject(error)
})
})
return getDescript
}


module.exports = self;

