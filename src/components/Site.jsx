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
                     <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="view-window">
                              <PictureViewer />
                        </div>
                     </div>
                     <div className="col-xs-12 col-sm-12 hidden-md hidden-lg hidden-xl">
                        <HorizontalMenu />
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div className="row">
                           <div className="hidden-sm hidden-xs col-md-2 col-lg-2">
                              <VerticalMenu />
                           </div>
                           <div className="col-xs-1 col-sm-1 hidden-md hidden-lg hidden-xl">

                           </div>
                           <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9" >
                              <div className="view-window">
                                 {this.props.children}
                              </div>
                           </div>
                           <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" >

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         );
   }
});

module.exports = Site;
