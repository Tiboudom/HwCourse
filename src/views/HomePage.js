import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function HomePage(props) {
	const [users, setUsers] = useState([]);
    const onDelete = (values) => {
        if (window.confirm("Confirm delete ?")) {
            const db = firebase.firestore();
            db.collection("users").doc(values.id).delete();
            fetchData();
        }
    };
	const fetchData = async () => {
		const db = firebase.firestore();
		const data = await db.collection("users").get();
		setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	};
	useEffect(() => {
		fetchData();
	}, []);
	const { history } = props;

	return (
		<div>
			<Table striped bordered hover className="contacts">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Controls</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={user.id}>
							<td>{index}</td>
							<td>{user.username}</td>
							<td>{user.mail}</td>
							<td>{user.phone}</td>
							<td style={{ width: "min-content" }}>
								<Button
									variant="outline-primary"
									className="mr-2"
									onClick={() => history.push("/infos", { user })}
								>
									Details
								</Button>
								<Button
									variant="outline-warning"
									className="mr-2"
									onClick={() => history.push("/createContact", { user })}
								>
									Edit
								</Button>
								<Button
									variant="outline-danger"
									className=""
									onClick={() => onDelete(user)}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Button variant="success" href="/createContact">
				Create
			</Button>
		</div>
	);
}

export default HomePage;
