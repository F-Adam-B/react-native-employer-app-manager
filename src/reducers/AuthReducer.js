import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGIN_USER,
	PASSWORD_CONFIRMED,
	PASSWORD_ERROR,
	LOGOUT_USER,
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	passwordConfirm: '',
	loading: false,
	error: '',
	user: null,
};

export default (state = INITIAL_STATE, action) => {
	console.log('action: ', action);
	switch (action.type) {
		case EMAIL_CHANGED:
			return {
				...state,
				email: action.payload,
			};
		case PASSWORD_CHANGED:
			return {
				...state,
				password: action.payload,
			};
		case PASSWORD_CONFIRMED:
			return {
				...state,
				passwordConfirm: action.payload,
			};
		case PASSWORD_ERROR:
			return {
				...state,
				error: "Passwords Don't match",
			};
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				...INITIAL_STATE,
				user: action.payload,
			};
		case LOGIN_USER_FAILED:
			return {
				...state,
				error: 'Authentication Failed',
				loading: false,
			};
		case LOGIN_USER:
			return {
				...state,
				loading: true,
				error: '',
			};
		case LOGOUT_USER:
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};
