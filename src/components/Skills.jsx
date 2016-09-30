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
   onChange: function(event, languages, technologies) {
      console.info("Updating Skills state");
      this.setState({
         languageList: languages,
         technologyList: technologies
      });
   },
   render: function() {
      return (
         <div>
            <h2>Skills</h2>
            <div >
               <ThumbnailList listItems={this.state.languages} />
            </div>
            <div >
               <ThumbnailList listItems={this.state.technologies} />
            </div>
         </div>
      );
   }
});

module.exports = Skills;
