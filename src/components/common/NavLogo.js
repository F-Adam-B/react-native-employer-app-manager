import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

const NavLogo = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Image
				source={require('../../assets/ic_menu_white_24dp.png')}
				style={{ width: 40, height: 30, marginLeft: 15 }}
			/>
		</TouchableOpacity>
	);
};

export { NavLogo };
