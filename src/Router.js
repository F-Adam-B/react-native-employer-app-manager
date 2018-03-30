import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import Dashboard from './components/common/Dashboard';

const DrawerStack = DrawerNavigator({
	employees: { screen: EmployeeList },
	employeeCreate: { screen: EmployeeCreate },
});

const PrimaryNav = StackNavigator({
	dashboard: { screen: Dashboard },
	login: { screen: LoginForm },
	drawerStack: { screen: DrawerStack },
	employeeEdit: { screen: EmployeeEdit },
});

export default PrimaryNav;
