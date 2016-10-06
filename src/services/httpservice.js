var Fetch = require('whatwg-fetch');
//var baseUrl = 'http://localhost:8080/';
var baseUrl = 'https://ssedrick.github.io/';

var service = {
   get: function(url) {
      return fetch(baseUrl + url)
      .then(function(response) {
         return response.json();
      });
   }
};

module.exports = service;
