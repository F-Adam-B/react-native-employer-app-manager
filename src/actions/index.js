import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGIN_USER,
	PASSWORD_CONFIRMED,
	PASSWORD_ERROR,
	LOGOUT_USER,
} from './types';
import firebase from 'firebase';

export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		payload: text,
	};
};

export const passwordChanged = text => {
	return {
		type: PASSWORD_CHANGED,
		payload: text,
	};
};

export const passwordConfirmed = text => {
	return {
		type: PASSWORD_CONFIRMED,
		payload: text,
	};
};

export const passwordError = () => {
	return {
		type: PASSWORD_ERROR,
	};
};

export const loginUser = ({ email, password, navigationProps }) => {
	return dispatch => {
		dispatch({ type: LOGIN_USER });
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				console.log('user: ', user);
				loginUserSuccess(dispatch, user, navigationProps);
			})
			.catch(() => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user, navigationProps))
					.catch(() => loginUserFailed(dispatch));
			});
	};
};

const loginUserFailed = dispatch => {
	dispatch({ type: LOGIN_USER_FAILED });
};

const loginUserSuccess = (dispatch, user, navigationProps) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user,
	});

	navigationProps.navigate('employees');
};

export const logoutUser = ({ user, navigationProps }) => {
	return dispatch => {
		dispatch({ type: LOGOUT_USER });
		firebase.auth().signOut();
		navigationProps.navigate('login');
		// navigationProps.navigate('dashboard');
	};
};
