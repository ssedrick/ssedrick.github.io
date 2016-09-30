var React = require('react');

var Thumbnail = React.createClass({
   render: function() {
      return (
         <i className={this.props.src + " colored square"} ></i>
      );
   }
});

module.exports = Thumbnail;
