import React from "react";
import firebase from "../firebase";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
	username: Yup.string().required(),
	mail: Yup.string()
	.required()
	.matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,"The mail must be as \"username@server.domain\""),
	phone: Yup.string()
	.required()
	.length(10, 'The phone number must contain 10 digits.')
	.matches(/^[0-9]{10}$/),
});

function CreateContact(props) {
	const { history } = props;
	const onUpdate = (values) => {
		const db = firebase.firestore();
		db.collection('users').doc(values.id).set(values);
		history.push('/');
	};
    const onCreate = (values) => {
        const db = firebase.firestore();
        db.collection("users").add(values);
        history.push('/');
    };
	const { location } = props;
	if (!location.state) location.state = {};
	const { user = { username: "", mail: "", phone: "" } } = location.state;
	let isEdit = user.id ? true : false;

	return (
		<div>
			<Formik
				validationSchema={schema}
				initialValues={user}
				validateOnChange={true}
				validateOnBlur={false}
				onSubmit={isEdit ? onUpdate : onCreate}
			>
				{({
					handleSubmit,
					handleChange,
					handleBlur,
					values,
					touched,
					isValid,
					errors,
					setFieldTouched,
				}) => (
					<Form noValidate onSubmit={handleSubmit}>
						<Form.Row>
							<Form.Group as={Col} md="4" controlId="validationFormikName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
                                    name="username"
									value={values.username}
									onChange={(e) => setFieldTouched("username") && handleChange(e)}
									isInvalid={touched.username && !!errors.username}
									isValid={touched.username && !errors.username}
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								<Form.Control.Feedback type="invalid">
									{errors.username}
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="4" controlId="validationFormikEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="text"
									name="mail"
									value={values.mail}
									onChange={(e) => setFieldTouched("mail") && handleChange(e)}
									isInvalid={touched.mail && !!errors.mail}
									isValid={touched.mail && !errors.mail}
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								<Form.Control.Feedback type="invalid">
									{errors.mail}
								</Form.Control.Feedback>
							</Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={values.phone}
                                    onChange={(e) => setFieldTouched("phone") && handleChange(e)}
                                    isInvalid={touched.phone && !!errors.phone}
                                    isValid={touched.phone && !errors.phone}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>
						</Form.Row>
						<Button type="submit">Submit form</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default CreateContact;