var React = require('react');
var Card = require('./Card.jsx');

var CardList = React.createClass({
   renderListItems: function() {
      var items = [];
      for (var i = 0; i < this.props.listItems.length; i++) {
         var item = this.props.listItems[i];
         items.push(<Card key={item.id} data={item} />);
      }
      return items;
   },
   render: function() {
      return (
         <div>
            <h3 className="list-header">{this.props.title}</h3>
            <div className="row">
               {this.renderListItems()}
            </div>
         </div>
      );
   }
});

module.exports = CardList;
