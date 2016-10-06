var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

var Site = require('./components/Site.jsx');
var Home = require('./components/Home.jsx');
var Resume = require('./components/Resume.jsx');
var Portfolio = require('./components/Portfolio.jsx');
var Skills = require('./components/Skills.jsx');
var About = require('./components/About.jsx');

var Routes = (
   <Router history={hashHistory} >
      <Route path="/" component={Site} >
         <Route path="/home" component={Home} />
         <Route path="/resume" component={Resume} />
         <Route path="/portfolio" component={Portfolio} />
         <Route path="/skills" component={Skills} />
         <Route path="/about" component={About} />
         <Route path="/*" component={Home} />
      </Route>
   </Router>
);

module.exports = Routes;
