import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = ({ contacts }, { props }) => {
	const { store, actions } = useContext(Context);

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link to={"/edit/" + contacts.id}>
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3" />
							</button>
						</Link>

						<button
							type="button"
							className="btn"
							data-toggle="modal"
							data-target={"#exampleModal" + contacts.id}>
							<i className="fas fa-trash-alt" />
						</button>

						<div
							className="modal fade text-dark"
							id={"exampleModal" + contacts.id}
							role="dialog"
							data-backdrop="false"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title  text-dark" id="exampleModalLabel">
											Delete contact: {contacts.full_name}
										</h5>
									</div>
									<div className="modal-body text-dark">
										<p>Warning: unknown consequences after this point... Kidding!</p>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Oh no!
										</button>
										<button
											type="button"
											className="btn btn-primary"
											data-dismiss="modal"
											aria-label="Close"
											onClick={() => {
												actions.deleteRecord(contacts.id);
											}}>
											Do it!
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<label className="name lead">{contacts.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{contacts.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{contacts.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{contacts.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	contacts: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
