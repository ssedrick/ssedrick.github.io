var React = require('react');

var Profile = React.createClass({
   mixins: [Reflux.listenTo(ProjectStore, 'onChange')],
   getInitialState: function() {
      return {
      };
   },
   componentWillMount: function() {
      //Actions.getProjects();
   },
   onChange: function(event, store) {
      this.setState({

      });
   },
   render: function() {
      return (
         <div>

         </div>
      );
   }
});

module.exports = Profile;
