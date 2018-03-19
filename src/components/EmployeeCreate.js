import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { employeeCreate } from '../actions/EmployeeActions';

class EmployeeCreate extends Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						<Text>Create</Text>
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	//
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
