function reduxToolkit({ initialState, reducers = {}, name }) {
	let action = {};
	let TYPE = {};

	for (const key in reducers) {
		let type = `${name.trim()}/${key.trim()}`;

		action[key] = (data) => {
			return {
				type,
				payload: data,
			};
		};

		TYPE[key] = type;
	}

	function reducer(state = initialState, action) {
		let type = action.type.split('/')[1];

		if (type in reducers) {
			return reducers[type](state, action);
		} else {
            return initialState;
        }
	}

	return {
		action,
		reducer,
		TYPE,
	};
}

export default reduxToolkit;
