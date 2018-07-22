let self = {};

const rest = require('restler');

self.productsApi = function(query) { 
  const getData =  new Promise(function(resolve, reject) {
   
 rest.get('https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=4').on('complete', function(result) { 
 resolve(result) 
}).on('fail', function(error) {
  reject(error)
})
})
return getData
}

module.exports = self;

