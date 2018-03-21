import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
	// static navigationOption = {
	// 	title: 'Edit employee',
	// };

	onRowPress() {
		this.props.navigation.navigate('employeeEdit', { employee });
	}
	render() {
		// const { navigate } = this.props.navigation;
		const { name } = this.props.employee;
		return (
			<TouchableWithoutFeedback onPress={() => this.props.onRowPress(this.props.employee)}>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
	},
};
export default ListItem;
