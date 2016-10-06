var React = require('react');

var Home = React.createClass({
   render: function() {
      return (
         <div>
            <h2 className="view-port-header">Resume</h2>
            <hr />
            <iframe src='https://onedrive.live.com/redir.aspx?cid=c9d9457f88e5a81e&resid=C9D9457F88E5A81E!4853&parId=C9D9457F88E5A81E!103&authkey=!APvEDmQw2soZ1bA&ithint=file%2cdocx'>
               This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a>.
            </iframe>
         </div>
      );
   }
});

module.exports = Home;
