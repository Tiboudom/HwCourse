import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className="main-nav" sticky="top">
			<Navbar.Brand href="/">Contact management</Navbar.Brand>
				<Button variant="outline-light" href="/" className="mr-2">Index</Button>
				<Button variant="outline-light" href="/createContact">Create</Button>
		</Navbar>
	);
}

export default NavBar;