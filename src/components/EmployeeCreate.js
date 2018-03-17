import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input label="Name" placeholder="Your Name" />
				</CardSection>
				<CardSection>
					<Input label="Phone" placeholder="555-555-5555" />
				</CardSection>
				<CardSection>
					<Button>
						<Text>Create</Text>
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default EmployeeCreate;
