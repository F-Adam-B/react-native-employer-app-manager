import React from 'react';
import { Router, Scene, Actions, Stack } from 'react-native-router-flux';
import { Text } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import Dashboard from './components/common/Dashboard';
import Logout from './components/common/Logout';
import { NavLogo } from './components/common/NavLogo';

// const EmployeeStack = StackNavigator({});

// const AuthStack = StackNavigator({});

// const MainStack = StackNavigator({

// });

const Drawer = DrawerNavigator({
	employees: { screen: EmployeeList },
	employeeCreate: { screen: EmployeeCreate },
	logout: { screen: Logout },
	login: { screen: LoginForm },
});

export default (PrimaryNav = StackNavigator(
	{
		// authStack: { screen: AuthStack },
		drawerStack: { screen: Drawer },
		// mainStack: { screen: MainStack },

		dashboard: { screen: Dashboard },
		// employeeStack: { screen: EmployeeStack },
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
