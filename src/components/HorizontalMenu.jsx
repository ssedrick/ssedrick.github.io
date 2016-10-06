var React = require('react');
var Link = require('react-router').Link;

var HorizontalMenu = React.createClass({

   render: function() {
      return (
         <div className="row">
            <div className="list-group">
               <div className="col-xs-3 col-sm-3">
               </div>
               <Link to={`/home`}  className="menu-item list-group-item col-xs-1 col-sm-1">
                  <i data-toggle="tooltip" data-placement="bottom" title="Home" className="material-icons">home</i>
               </Link>
               <Link to={`/resume`}  className="menu-item list-group-item col-xs-1 col-sm-1">
                  <i data-toggle="tooltip" data-placement="bottom" title="Resume" className="material-icons">insert_drive_file</i>
               </Link>
               <Link to={`/portfolio`}  className="menu-item list-group-item col-xs-1 col-sm-1">
                  <i data-toggle="tooltip" data-placement="bottom" title="Portfolio" className="material-icons">folder_shared</i>
               </Link>
               <Link to={`/skills`}  className="menu-item list-group-item col-xs-1 col-sm-1">
                  <i data-toggle="tooltip" data-placement="bottom" title="Skills" className="material-icons">keyboard</i>
               </Link>

               <div className="col-xs-3 col-sm-3"></div>
            </div>
         </div>
      );
   }
});

/*<Link to={`/experience`}  className="menu-item list-group-item col-xs-1 col-sm-1">
   <i data-toggle="tooltip" data-placement="bottom" title="Experience" className="material-icons">schedule</i>
</Link>
<Link to={`/about`}  className="menu-item list-group-item col-xs-1 col-sm-1">
   <i data-toggle="tooltip" data-placement="bottom" title="About Me" className="material-icons">person</i>
</Link>*/

module.exports = HorizontalMenu;
