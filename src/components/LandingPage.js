import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

const LandingPage = () => {
	return (
		<Card style={styles.cardFlexStyle}>
			<CardSection style={styles.landingPageStyle}>
				<Text style={styles.textLandingPageStyle}>Quicker, simpler, scheduling </Text>
			</CardSection>
			<CardSection>
				<Button style={styles.buttonStyle} onPress={() => Actions.auth()}>
					<Text>Get Started</Text>
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	cardFlexStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: 'white',
	},
	landingPageStyle: {
		height: 395,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',

		// position: 'static',
	},
	textLandingPageStyle: {
		fontSize: 18,
		color: 'green',
		backgroundColor: 'white',
	},
};

export { LandingPage };
