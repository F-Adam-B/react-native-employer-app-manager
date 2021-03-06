import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, CANCEL_EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: [],
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
		case EMPLOYEE_CREATE:
			return INITIAL_STATE;
		case EMPLOYEE_SAVE_SUCCESS:
			return INITIAL_STATE;
		case CANCEL_EMPLOYEE_UPDATE:
			return INITIAL_STATE;
		default:
			return state;
	}
};
