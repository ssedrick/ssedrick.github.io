var React = require('react');
var Header = require('Header');

var Site = React.createClase({
   render: function() {
      <div className="mdl-layout__container row">
         <div className="mdl-layout mdl-js-layout col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <Header />
         </div>
         <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div>
               {this.props.children}
            </div>
         </div>
      </div>
   }
});

module.exports = Site;
