import React, { Component } from 'react';
import { ListView, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import { employeesFetch } from '../actions/EmployeeActions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'List of All Employees !',
		headerLeft: null,
		headerRight: (
			<Button
				onPress={() => {
					navigation.navigate('employeeCreate');
				}}
			>
				Add
			</Button>
		),
	});

	componentWillMount() {
		this.props.employeesFetch();
	}

	goToPage(employee) {
		this.props.navigation.navigate('employeeEdit', { employee });
	}

	// createDataSource({ employees }) {
	// 	const ds = new ListView.DataSource({
	// 		rowHasChanged: (r1, r2) => r1 !== r2,
	// 	});

	// 	this.dataSource = ds.cloneWithRows(employees);
	// }

	// renderRow(employee) {
	// 	return <ListItem employee={employee} />;
	// }

	render() {
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={this.props.employees}
					renderItem={({ item }) => (
						<ListItem
							employee={item}
							navi={this.props.navigation}
							onRowPress={employee => this.goToPage(employee)}
						/>
					)}
					keyExtractor={(item, index) => item.uid}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});
	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
