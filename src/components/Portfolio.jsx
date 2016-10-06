var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var ProjectStore = require('../reflux/project-store.jsx');

var CardList = require('./CardList.jsx');

var Portfolio = React.createClass({
   mixins: [Reflux.listenTo(ProjectStore, 'onChange')],
   getInitialState: function() {
      return {
         projectList: []
      };
   },
   componentWillMount: function() {
      Actions.getProjects();
   },
   onChange: function(event, store) {
      this.setState({
         projectList: store.projects
      });
   },
   render: function() {
      return (
         <div>
            <h2 className="view-port-header">Portfolio</h2>
            <hr />
            <div>
               <CardList listItems={this.state.projectList} title="Projects" />
            </div>
         </div>
      );
   }
});

module.exports = Portfolio;
