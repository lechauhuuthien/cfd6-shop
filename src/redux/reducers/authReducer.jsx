// import { LOGIN, LOGOUT, SET_LOGIN_ERROR, SET_LOGIN_STATUS, REGISTER, UPDATE_USER, SET_REGISTER_ERROR } from '../type';

import reduxToolkit from '../../core/reduxToolkit';
import authAPI from '../../services/authAPI';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')),
	loginError: '',
	loginStatus: false,
	registerError: '',
};

// export default function authReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case LOGIN:
// 			localStorage.setItem('user', JSON.stringify(action.payload));
// 			return {
// 				...state,
// 				user: { ...action.payload },
// 				loginStatus: false,
// 				loginError: '',
// 			};

// 		case LOGOUT:
// 			localStorage.setItem('user', null);
// 			return {
// 				...state,
// 				user: null,
// 			};

// 		case SET_LOGIN_ERROR:
// 			return {
// 				...state,
// 				loginError: action.payload,
// 			};

// 		case SET_LOGIN_STATUS:
// 			return {
// 				...state,
// 				loginStatus: action.payload,
// 			};

// 		case REGISTER:
// 			localStorage.setItem('user', JSON.stringify(action.payload));
// 			return {
// 				...state,
// 				user: {...action.payload},
// 				registerError: '',
// 			};

// 		case SET_REGISTER_ERROR:
// 			return {
// 				...state,
// 				registerError: action.payload,
// 			};

// 		case UPDATE_USER:
// 			localStorage.setItem(
// 				'user',
// 				JSON.stringify({ ...JSON.parse(localStorage.getItem('user')), ...action.payload })
// 			);
// 			return {
// 				...state,
// 				user: { ...action.payload },
// 			};

// 		default:
// 			return state;
// 	}
// }

let { action, reducer: authReducer, TYPE } = reduxToolkit({
	initialState,
	name: 'auth',
	reducers: {
		loginAction: (state, action) => {
			localStorage.setItem('user', JSON.stringify(action.payload));
			return {
				...state,
				user: { ...action.payload },
				loginStatus: false,
				loginError: '',
			};
		},
		logoutAction: (state, action) => {
			localStorage.setItem('user', null);
			return {
				...state,
				user: null,
			};
		},
		setLoginError: (state, action) => {
			return {
				...state,
				loginError: action.payload,
			};
		},
		setLoginStatus: (state, action) => {
			return {
				...state,
				loginStatus: action.payload,
			};
		},
		register: (state, action) => {
			localStorage.setItem('user', JSON.stringify(action.payload));
			return {
				...state,
				user: { ...action.payload },
				registerError: '',
			};
		},
		registerError: (state, action) => {
			return {
				...state,
				registerError: action.payload,
			};
		},
		updateUser: (state, action) => {
			localStorage.setItem(
				'user',
				JSON.stringify({ ...JSON.parse(localStorage.getItem('user')), ...action.payload })
			);
			return {
				...state,
				user: { ...action.payload },
			};
		},
	},
});

export default authReducer;

export const { logoutAction, setLoginError, setLoginStatus, registerError } = action;
export const AUTH_TYPE = TYPE;

export function loginAction(data) {
	return async (dispatch) => {
		let res = await authAPI.login(data);
		if (res?.data) {
			dispatch({
				type: TYPE.loginAction,
				payload: res.data,
			});
		} else if (res?.error) {
			dispatch(setLoginError(res.error));
		}
	};
}

export function register(data) {
	return async (dispatch) => {
		let res = await authAPI.register(data);
		if (res?.data) {
			dispatch({
				type: TYPE.register,
				payload: res.data,
			});
		} else if (res?.error) {
			dispatch(registerError(res?.error || res?.error?.password));
		}
	};
}

export function updateUser(data) {
	return async (dispatch) => {
		let res = await authAPI.update(data);
		if (res?.data) {
			dispatch({
				type: TYPE.updateUser,
				payload: res.data,
			});
			return 'Thay đổi thành công';
		} else if (res.error) {
			return res.error;
		}
	};
}
