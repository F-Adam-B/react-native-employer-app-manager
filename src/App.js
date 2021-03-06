import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import PrimaryNav from './Router';

// import ReduxNavigation from './ReduxNavigation';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyCMbsuskcY0Z6g_4y5UdbkGX7RIbqv1nYg',
			authDomain: 'manager-d9871.firebaseapp.com',
			databaseURL: 'https://manager-d9871.firebaseio.com',
			projectId: 'manager-d9871',
			storageBucket: 'manager-d9871.appspot.com',
			messagingSenderId: '211903837448',
		};
		firebase.initializeApp(config);
	}
	render() {
		// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<PrimaryNav />
			</Provider>
		);
	}
}

export default App;
