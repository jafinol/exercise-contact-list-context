import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	let nameclass = "form-control";
	const { actions } = useContext(Context);
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	console.log("Hello2", name == false);
	const fields = e => {
		if (!name || !phone || !email || !address) {
			e.preventDefault();
		} else {
			actions.addContactAgenda(name, phone, email, address);
		}
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form className=" g-3 needs-validation">
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							id="name"
							className={!name ? "form-control is-invalid" : "form-control"}
							placeholder="Full Name"
							onChange={e => setName(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							id="email"
							className={!email ? "form-control is-invalid" : "form-control"}
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							id="phone"
							className={!phone ? "form-control is-invalid" : "form-control"}
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className={!address ? "form-control is-invalid" : "form-control"}
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
							required
						/>
					</div>
					<Link to={"/"}>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={e => {
								fields(e);
								console.log("Hello word");
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
