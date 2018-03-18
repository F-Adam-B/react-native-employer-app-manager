import React, { Component } from 'react';
import { View } from 'react-native';

const CardSection = props => {
	// in the event additional props sent, takes array and overides with the second
	return <View style={[styles.containerStyle, props.style]}>{props.children}</View>;
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
	},
};
export { CardSection };
