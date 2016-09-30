var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var SkillsStore = Reflux.createStore({
   listenables: [Actions],
   getSkills: function() {
      HTTP.get('data/skills.json')
      .then(function (response) {
         this.languages = response.languages;
         this.technologies = response.technologies;
         this.fireUpdate();
      }.bind(this));
   },
   fireUpdate: function() {
      this.trigger('change', this.languages, this.technologies);
   }
});

module.exports = SkillsStore;
