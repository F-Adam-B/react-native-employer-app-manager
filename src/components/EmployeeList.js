import React, { Component } from 'react';
import { ListView, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import { NavLogo } from './common/NavLogo';
import { employeesFetch } from '../actions/EmployeeActions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Your team',

			headerRight: (
				<Button
					style={{ height: 20 }}
					onPress={() => {
						navigation.navigate('employeeCreate');
					}}
					title="Add"
					color="white"
				>
					Add
				</Button>
			),
		};
	};

	componentWillMount() {
		this.props.employeesFetch();
	}

	goToPage(employee) {
		this.props.navigation.navigate('employeeEdit', { employee });
	}

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
