var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

var Site = require('./components/Site.jsx');
var Home = require('./components/Home.jsx');
var Skills = require('./components/Skills.jsx');
var About = require('./components/About.jsx');

var Routes = (
   <Router history={browserHistory} >
      <Route path="/" component={Site} >
         <Route path="/home" component={Home} />
         <Route path="/skills" component={Skills} />
         <Route path="/about" component={About} />
         <Route path="*" component={Home} />
      </Route>
   </Router>
);

module.exports = Routes;
