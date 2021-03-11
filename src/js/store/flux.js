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
			}
		}
	};
};

export default getState;
