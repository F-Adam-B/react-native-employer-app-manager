import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';

const NavLogo = ({ onPress }) => {
	return (
		<TouchableHighlight onPress={onPress}>
			<Image
				source={require('../../assets/ic_menu_black_24dp.png')}
				style={{ width: 40, height: 30, marginLeft: 15 }}
			/>
		</TouchableHighlight>
	);
};
export { NavLogo };
