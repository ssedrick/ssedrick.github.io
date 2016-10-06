var React = require('react');
var Thumbnail = require('./Thumbnail.jsx');

var ThumbnailList = React.createClass({
   renderListItems: function() {
      console.info(this.props);
      var items = [];
      for (var i = 0; i < this.props.listItems.length; i++) {
         var item = this.props.listItems[i];
         items.push(<div className="square"><Thumbnail key={item.id} src={item.icon} /></div>);
      }
      return items;
   },
   render: function() {
      return (
         <div className="row">
            <h3>{this.props.title}</h3>
            {this.renderListItems()}
         </div>
      );
   }
});

module.exports = ThumbnailList;
