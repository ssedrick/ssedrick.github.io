var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var SkillsStore = Reflux.createStore({
   listenables: [Actions],
   getLanguages: function() {
      HTTP.get('data/skills.json')
      .then(function (response) {
         this.languages = response.languages;
         this.updateLanguages();
      }.bind(this));
   },
   getTechnologies: function() {
      HTTP.get('data/skills.json')
      .then(function (response) {
         this.technologies = response.technologies;
         this.updateTechnologies();
      }.bind(this));
   },
   updateLanguages: function() {
      this.trigger('change', this.languages);
   },
   updateTechnologies: function() {
      this.trigger('change', this.technologies);
   }
});

module.exports = SkillsStore;
