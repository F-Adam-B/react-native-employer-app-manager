'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';
import { Card } from './Card';

class Dashboard extends Component {
	static navigationOptions = {
		title: 'Simply Schedule',
		headerLeft: null,
	};
	render() {
		//
		const { textStyle, viewStyle } = styles;
		const { navigate } = this.props.navigation;

		return (
			<Card style={{ flex: 1 }}>
				<CardSection style={styles.viewStyle}>
					<Text style={styles.textStyle}>Quicker, simpler, scheduling</Text>
				</CardSection>
				<CardSection>
					<Button title="Get Started" onPress={() => navigate('signup')}>
						<Text>Get Started</Text>
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	viewStyle: {
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		height: 525,
		paddingTop: 15,
		shadowColor: '#00FFFF',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2, //iOS
		elevation: 2, //Android
		position: 'relative',
	},
	textStyle: {
		fontSize: 50,
		color: 'green',
	},
};

export default Dashboard;
