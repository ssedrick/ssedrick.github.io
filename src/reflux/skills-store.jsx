var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var SkillsStore = Reflux.createStore({
   listenables: [Actions],
   getSkills: function() {
      HTTP.get('data/skills.json')
      .then(function (response) {
         console.info("Response", response);
         this.data = response.Data;
         console.info("Store data", this.data);
         this.updateSkills();
      }.bind(this));
   },
   updateSkills: function() {
      this.trigger('change', this.data)
   }
});

module.exports = SkillsStore;
