var React = require('react');
var PictureViewer = require('./PictureViewer.jsx');
var VerticalMenu = require('./VerticalMenu.jsx');
var HorizontalMenu = require('./HorizontalMenu.jsx');

var Site = React.createClass({
   render: function() {
      return (
            <div className="mdl-layout__container">
               <div className="mdl-layout mdl-js-layout">
                  <div className="row">
                     <div className="left-view-port view-port">
                        <PictureViewer />
                     </div>
                     <div className="hidden-md hidden-lg hidden-xl">
                        <HorizontalMenu />
                     </div>
                     <div className="menu-group hidden-sm hidden-xs view-port">
                        <VerticalMenu />
                     </div>
                     <div className="right-view-port view-port">
                        <div className="row">
                           <div className="col-xs-1">

                           </div>
                           <div className="col-xs-10">
                              {this.props.children}
                           </div>
                           <div className="col-xs-1"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         );
   }
});

module.exports = Site;
