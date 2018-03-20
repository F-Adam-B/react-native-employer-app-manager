import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import Dashboard from './components/common/Dashboard';

const RouterComponent = StackNavigator({
	dashboard: { screen: Dashboard },
	login: { screen: LoginForm },
	employees: { screen: EmployeeList },
	employeeCreate: { screen: EmployeeCreate },
	employeeEdit: { screen: EmployeeEdit },
});

// const { routerStyleHeader, textColor } = styles;

// const styles = StyleSheet.create({
// 	routerStyleHeader: {
// 		justifyContent: 'center',
// 		backgroundColor: 'green',
// 		height: 150,
// 	},
// 	textColor: {
// 		color: 'white',
// 		paddingLeft: 100,
// 	},
// });

export default RouterComponent;
