const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getAgenda: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/finolweb")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ agenda: response });
					});
			},
			//Inicio de add
			addContactAgenda(name, phone, email, address) {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "finolweb",
						full_name: name,
						phone: phone,
						address: address,
						email: email
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/finolweb")
						.then(res => res.json())
						.then(response => {
							setStore({ agenda: response });
						});
				});
			}, //Final add
			deleteRecord(id) {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/finolweb")
						.then(res => res.json())
						.then(response => {
							setStore({ agenda: response });
						});
				});
			}, //final delete
			updateContact(id, name, phone, email, address) {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "finolweb"
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/finolweb")
						.then(res => res.json())
						.then(response => {
							setStore({ agenda: response });
						});
				});
			} //end update
		} //action final
	};
};

export default getState;
