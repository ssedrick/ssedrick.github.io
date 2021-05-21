import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Skills from './Skills';
import Portfolio from './Portfolio';

export default function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/resume" component={Resume} />
				<Route path="/skills" component={Skills} />
				<Route path="/about" component={About} />
				<Route component={Home} />
			</Switch>
		</Layout>
	);
}
