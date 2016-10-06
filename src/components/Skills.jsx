var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var SkillStore = require('../reflux/skills-store.jsx');

var ThumbnailList = require('./ThumbnailList.jsx');

var Skills = React.createClass({
   mixins: [Reflux.listenTo(SkillStore, 'onChange')],
   getInitialState: function() {
      return {
         languageList: [],
         technologyList: []
      };
   },
   componentWillMount: function() {
      Actions.getSkills();
   },
   onChange: function(event, store) {
      console.info("Changing state", store);
      this.setState({
         languageList: store.languages,
         technologyList: store.technologies
      });
   },
   render: function() {
      return (
         <div>
            <h2>Skills</h2>
            <div >
               <ThumbnailList listItems={this.state.languageList} title="Languages and Frameworks"/>
            </div>
            <div >
               <ThumbnailList listItems={this.state.technologyList} title="Technologies"/>
            </div>
         </div>
      );
   }
});

module.exports = Skills;
