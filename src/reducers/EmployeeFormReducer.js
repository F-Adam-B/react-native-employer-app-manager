import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
			return {
				...state,
				// using key interpolation added at runtime
				// whatever is passed through is updated, i.e. name/shift/etc
				[action.payload.prop]: action.payload.value,
			};
		// case EMPLOYEE_CREATE:
		// 	return {
		// 		...state,
		// 		[action.payload.prop]: action.payload.value,
		// 	};
		default:
			return state;
	}
};
