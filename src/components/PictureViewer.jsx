var React = require('react');

var PictureViewer = React.createClass({
   render: function() {
      return (
         <div>
            <img src="images/profile.jpg" alt="Shem Sedrick" width="100%"></img>
            <h6 style={{margin: "5px", textAlign: "center", color: "#f9f9f9"}}>The best thing about a boolean is even if you are wrong, you are only off by a bit. &nbsp; ~Anonymous</h6>
         </div>
      );
   }
});

module.exports = PictureViewer;
