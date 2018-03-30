import RouterComponent from '../Router';

export default (state, action) => {
	const newState = RouterComponent.router.getStateForAction(action, state);
	return newState || state;
};
