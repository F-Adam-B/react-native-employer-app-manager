import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
	return (
		<Router navigationBarStyle={{ textAlign: 'center' }}>
			<Scene key="root">
				<Scene key="login" component={LoginForm} title="Please Login" />
				<Scene key="employeeList" component={EmployeeList} title="Employees" initial />
			</Scene>
		</Router>
	);
};

export default RouterComponent;
