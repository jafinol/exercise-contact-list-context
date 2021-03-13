import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
			</div>

			<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
				<ul className="list-group pull-down" id="contact-list">
					{store.agenda &&
						store.agenda.map((item, index) => {
							return (
								<ContactCard
									key={index}
									contacts={item}
									onDelete={() => setState({ showModal: true })}
								/>
							);
						})}
				</ul>
			</div>
		</div>
	);
};
