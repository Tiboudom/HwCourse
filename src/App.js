import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import history from "./utils/history.js";

import './App.css';

const NavBarWithRouter = withRouter(NavBar);

function App() {
	return (
		<Router history={history}>
			<NavBarWithRouter />
			<div className="content-wrapper">
			</div>
		</Router>
	);
}

export default App;
