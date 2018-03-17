import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Platform, StyleSheet } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router navigationBarStyle={styles.routerStyleHeader}>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" initial />
				</Scene>
				<Scene key="main">
					<Scene
						key="employeeList"
						component={EmployeeList}
						title="Employees"
						rightTitle=" Add"
						onRight={() => Actions.employeeCreate()}
						initial
					/>
					<Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
				</Scene>
			</Scene>
		</Router>
	);
};

const styles = StyleSheet.create({
	routerStyleHeader: {
		...Platform.select({
			android: { justifyContent: 'center' },
		}),
	},
});

export default RouterComponent;
