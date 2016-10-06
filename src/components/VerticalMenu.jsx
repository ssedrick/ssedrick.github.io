var React = require('react');
var Link = require('react-router').Link;

var VerticalMenu = React.createClass({

   render: function() {
      return (
         <div className="vertical-center">
            <div className="list-group">
               <Link to={`/home`}  className="menu-item list-group-item">
                  <i data-toggle="tooltip" data-placement="right" title="Home" className="material-icons">home</i>
               </Link>
               <Link to={`/resume`}  className="menu-item list-group-item">
                  <i data-toggle="tooltip" data-placement="right" title="Resume" className="material-icons">insert_drive_file</i>
               </Link>
               <Link to={`/portfolio`}  className="menu-item list-group-item">
                  <i data-toggle="tooltip" data-placement="right" title="Portfolio" className="material-icons">folder_shared</i>
               </Link>
               <Link to={`/skills`}  className="menu-item list-group-item">
                  <i data-toggle="tooltip" data-placement="right" title="Skills" className="material-icons">keyboard</i>
               </Link>

            </div>
         </div>
      );
   }
});

/* <Link to={`/experience`}  className="menu-item list-group-item">
   <i data-toggle="tooltip" data-placement="right" title="Experience" className="material-icons">schedule</i>
</Link>
<Link to={`/about`}  className="menu-item list-group-item">
   <i data-toggle="tooltip" data-placement="right" title="About Me" className="material-icons">person</i>
</Link> */

module.exports = VerticalMenu;
