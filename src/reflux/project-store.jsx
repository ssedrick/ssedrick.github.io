var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var ProjectStore = Reflux.createStore({
   listenables: [Actions],
   getProjects: function() {
      HTTP.get('data/projects.json')
      .then(function (response) {
         //console.info("Response", response);
         this.data = response.Data;
         //console.info("Store data", this.data);
         this.updateProjects();
      }.bind(this));
   },
   updateProjects: function() {
      this.trigger('change', this.data)
   }
});

module.exports = ProjectStore;
