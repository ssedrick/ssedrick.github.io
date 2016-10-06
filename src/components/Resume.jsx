var React = require('react');

var Home = React.createClass({
   render: function() {
      return (
         <div>
            <h2 className="view-port-header">Resume</h2>
            <hr />
            <iframe src='https://onedrive.live.com/embed?cid=C9D9457F88E5A81E&resid=C9D9457F88E5A81E%214853&authkey=AM2Tbui0rLg39i0&em=2&wdStartOn=1' width='476px' height='288px' frameborder='0'>This is an embedded <a target='_blank' href='https://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='https://office.com/webapps'>Office Online</a>.</iframe>
         </div>
      );
   }
});

module.exports = Home;
