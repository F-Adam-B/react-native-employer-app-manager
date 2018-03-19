import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Text } from 'react-native';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions/EmployeeActions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
	state = { showModal: false };
	componentWillMount() {
		// using lodash to iterate over all the property of the selected employee
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	onTextPress() {
		const { phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onModalPress() {
		this.setState({
			showModal: true,
		});
	}

	onDecline() {
		console.log('decline');
		this.setState({ showModal: false });
	}

	onAccept() {
		const { uid } = this.props.employee;
		this.props.employeeDelete({ uid });
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						<Text>Save Changes</Text>
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>
						<Text>Text Schedule</Text>
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onModalPress.bind(this)}>
						<Text>Terminate</Text>
					</Button>
				</CardSection>

				<Confirm
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to terminate employee?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
