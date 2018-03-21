import firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
import {
	CANCEL_EMPLOYEE_UPDATE,
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEE_SAVE_SUCCESS,
} from './types';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value },
	};
};

export const employeeCreate = ({ name, phone, shift, navigationProps }) => {
	const { currentUser } = firebase.auth();

	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_CREATE });
				navigationProps.navigate('employees');
			});
	};
};

export const employeesFetch = () => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};

export const employeeSave = ({ name, phone, shift, uid, navigationProps }) => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees/${uid}`)
			.set({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
				navigationProps.goBack();
			});
	};
};

export const employeeSaveSuccess = () => {
	return {
		type: EMPLOYEE_SAVE_SUCCESS,
	};
};

export const employeeDelete = ({ uid }) => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees/${uid}`)
			.remove()
			.then(() => {
				dispatch({ type: CANCEL_EMPLOYEE_UPDATE });
				// navigationProps.navigate('employees');
			});
	};
};
