var React = require('react');

var Thumbnail = React.createClass({
   render: function() {
      return (
         <a href className="square thumbnail">
            <i class={this.props.src + " colored"} ></i>
         </a>
      );
   }
});

module.exports = Thumbnail;
