import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import RouterComponent from './Router';

// here is our redux-aware our smart component
function ReduxNavigation(props) {
	console.log('props: ', props);
	const { dispatch, nav } = props;
	// const navigation = ReactNavigation.addNavigationHelpers({
	// 	dispatch,
	// 	state: nav,
	// });

	return (
		<RouterComponent
			navigation={ReactNavigation.addNavigationHelpers({
				dispatch: this.dispatch,
				state: this.nav,
			})}
		/>
	);
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
