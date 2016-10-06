var React = require('react');

var Card = React.createClass({
   render: function() {
      return (
         <div className="site-card mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand" style={{background: "url('" + this.props.data.image_url + "') center no-repeat #163d64", backgroundSize: "320px"}} >
               <h2 className="mdl-card__title-text" style={{color: "#f9f9f9"}}>{this.props.data.name}</h2>
            </div>
            <div className="mdl-card__supporting-text">
               {this.props.data.short_description}
            </div>
            <div className="mdl-card__actions mdl-card--border">
               <a href={this.props.data.url} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  {this.props.data.action}
               </a>
            </div>
         </div>
      );
   }
});

module.exports = Card;
