import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Contacts } from "./Contacts";
// import { useHistory } from "react-router-dom";

export const AddContact = () => {
	// const history = useHistory();
	const { actions } = useContext(Context);
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [valName, setValName] = useState(false);
	const [valEmail, setValEmail] = useState(false);
	const [valAddress, setValAddress] = useState(false);
	const [valPhone, setValPhone] = useState(false);
	const [validation, setValidation] = useState(false);
	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(() => {
		if (!valName && !valEmail && !valPhone && !valAddress && validation) {
			actions.addContactAgenda(name, phone, email, address);
			<Link to="/">
				<Contacts />
			</Link>;
			setValidation(false);
		} else {
			setValidation(false);
		}
	}, [validation]);

	//	console.log("Hello2", name == false);
	// const fields = e => {
	// 	if (!name || !phone || !email || !address) {
	// 		console.log("Hello2");
	// 		if (!name) {
	// 			namecla = "form-control is-invalid";
	// 		}

	// 		e.preventDefault();
	// 	} else {
	// 		actions.addContactAgenda(name, phone, email, address);
	// 	}
	// };

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
							className={valName ? "form-control is-invalid" : "form-control"}
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
							className={valEmail ? "form-control is-invalid" : "form-control"}
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
							className={valPhone ? "form-control is-invalid" : "form-control"}
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className={valAddress ? "form-control is-invalid" : "form-control"}
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
							required
						/>
					</div>

					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							// fields(e);
							setValName(checkInput(name));
							setValEmail(checkInput(email));
							setValAddress(checkInput(address));
							setValPhone(checkInput(phone));
							setValidation(true);
							// console.log("Hello word", checkInput(name));
						}}>
						save
					</button>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
