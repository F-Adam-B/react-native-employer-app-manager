import React from 'react';
import { Router, Scene, Actions, Stack } from 'react-native-router-flux';
import { Text } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import Dashboard from './components/common/Dashboard';
import Logout from './components/common/Logout';
import { Confirm, View, Button, NavLogo } from './components/common';
import { logoutUser } from './actions';

const AuthStack = DrawerNavigator({
	login: { screen: LoginForm },
	signup: { screen: SignupForm },
});

const Drawer = DrawerNavigator({
	employees: { screen: EmployeeList },
	employeeCreate: { screen: EmployeeCreate },
	logout: { screen: Logout },
});

export default (PrimaryNav = StackNavigator(
	{
		dashboard: { screen: Dashboard },
		authStack: { screen: AuthStack },
		drawerStack: { screen: Drawer },
		employeeEdit: { screen: EmployeeEdit },
	},
	{
		headerMode: 'screen',
		initialRouteName: 'dashboard',
		navigationOptions: ({ navigation }) => ({
			headerStyle: { backgroundColor: 'green' },
			headerTintColor: 'white',
			headerLeft: <NavLogo onPress={() => navigation.navigate('DrawerOpen')} />,
		}),
	}
));
