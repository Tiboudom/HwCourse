import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import history from "./utils/history.js";

import HomePage from "./views/HomePage";
import CreateContact from "./views/CreateContact";
import Infos from "./views/Infos";
import NavBar from "./views/NavBar";
import NoMatchFound from "./views/NoMatchFound";

import './App.css';

const NavBarWithRouter = withRouter(NavBar);

function App() {
	return (
		<Router history={history}>
			<NavBarWithRouter />
			<div className="content-wrapper">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/createContact" component={CreateContact} />
					<Route exact path="/infos" component={Infos} />
					<Route component={NoMatchFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
