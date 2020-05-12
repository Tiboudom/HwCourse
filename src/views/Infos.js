import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import firebase from "../firebase";

function Infos(props) {
	const { history, location } = props;
	if (!location.state) location.state = {};
	const { user = { username: "", mail: "", phone: "" } } = location.state;
	const onDelete = (values) => {
		if (window.confirm('Are you sure ?')) {
			const db = firebase.firestore();
			db.collection("users").doc(values.id).delete();
			history.push("/");
		}
	};

	return (
		<div>
			<Button variant="outline-secondary" href="/" className="mb-2">Go back</Button>
			<Card>
				<Card.Header>Contact</Card.Header>
				<Card.Body>
					<Card.Text>Name: {user.username}</Card.Text>
					<Card.Text>Email: {user.mail}</Card.Text>
					<Card.Text>Phone: {user.phone}</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">
					<Button
						variant="outline-warning"
						className="mr-2"
						onClick={() => history.push("/createContact", { user })}
					>
						Edit
					</Button>
					<Button variant="outline-danger" className="" onClick={() => onDelete(user)}>
						Delete
					</Button>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default Infos;