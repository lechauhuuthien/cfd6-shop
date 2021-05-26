import { LOGIN, LOGOUT, SET_LOGIN_ERROR, SET_LOGIN_STATUS, REGISTER, UPDATE_USER, SET_REGISTER_ERROR } from '../type';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')),
	loginError: '',
	loginStatus: false,
	registerError: '',
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem('user', JSON.stringify(action.payload));
			return {
				...state,
				user: { ...action.payload },
				loginStatus: false,
				loginError: '',
			};

		case LOGOUT:
			localStorage.setItem('user', null);
			return {
				...state,
				user: null,
			};

		case SET_LOGIN_ERROR:
			return {
				...state,
				loginError: action.payload,
			};

		case SET_LOGIN_STATUS:
			return {
				...state,
				loginStatus: action.payload,
			};

		case REGISTER:
			localStorage.setItem('user', JSON.stringify(action.payload));
			console.log('action.payload :>> ', action.payload);
			return {
				...state,
				user: {...action.payload},
				registerError: '',
			};

		case SET_REGISTER_ERROR:
			return {
				...state,
				registerError: action.payload,
			};

		case UPDATE_USER:
			localStorage.setItem(
				'user',
				JSON.stringify({ ...JSON.parse(localStorage.getItem('user')), ...action.payload })
			);
			return {
				...state,
				user: { ...action.payload },
			};

		default:
			return state;
	}
}
