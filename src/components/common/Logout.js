import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';

import { CardSection, Button, Card } from '.';

class Logout extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Logout',
		};
	};
	render() {
		return (
			<Card>
				<CardSection>
					<Button onPress={onPress}>Logout</Button>
				</CardSection>
			</Card>
		);
	}
}
export default Logout;
