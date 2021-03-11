import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	let id = props.match.params.id;
	let pos = 0;
	const { store, actions } = useContext(Context);

	for (let i in store.agenda) {
		if (store.agenda[i].id === id) {
			pos = i;
		}
	}

	let agenda = store.agenda[pos];
	const [phone, setPhone] = useState(agenda ? agenda.phone : "");
	const [name, setName] = useState(agenda ? agenda.full_name : "");
	const [email, setEmail] = useState(agenda ? agenda.email : "");
	const [address, setAddress] = useState(agenda ? agenda.address : "");

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={address}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<Link to={"/"}>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.updateContact(id, name, phone, email, address);
							}}>
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
