import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CalendarButton = props => {
	function getContent() {
		if (props.children) {
			return props.children;
		}
		return <Text style={props.styles.label}>{props.label}</Text>;
	}

	return (
		<TouchableOpacity onPress={props.onPress} style={styles.button}>
			<Text>{getContent()}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		flex: 1,
		backgroundColor: '#F5F5F5',
		padding: 17,
		margin: 2,
	},
};
export { CalendarButton };
