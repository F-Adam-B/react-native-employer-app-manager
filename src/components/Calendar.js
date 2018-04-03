import React, { Component } from 'react';

import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import { NavLogo } from './common';

export default class Calendar extends Component {
	static navigationOptions = () => {
		return {
			header: null,
		};
	};

	renderWeekdays() {
		const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sundar'];
		return weekdays.map(day => {
			return (
				// <View>
				<Text key={day} style={styles.calendar_weekdays_text}>
					{day.toUpperCase()}
				</Text>
				// </View>
			);
		});
	}
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity
						noDefaultStyles={true}
						// onPress={}
						style={styles.header_item}
					>
						<View style={styles.header_button}>
							<Text style={[styles.header_text]}> Menu</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.header_item}>
						<Text style={[styles.header_text, styles.text_center, styles.bold_text]}>Calendar</Text>
					</View>
					<View style={styles.header_item}>
						<Text style={[styles.header_text, styles.text_right]}>Today</Text>
					</View>
				</View>

				<View style={styles.calendar_header}>
					<View style={styles.calendar_header_item}>
						<TouchableOpacity
							noDefaultStyles={true}
							// onPress={this.press.bind(this)}
						>
							<Icon name="chevron-left" size={18} color="#333" />
						</TouchableOpacity>
						<Text style={styles.calendar_header_text}>2013</Text>
						<TouchableOpacity
							noDefaultStyles={true}
							// onPress={this.press.bind(this)}
						>
							<Icon name="chevron-right" size={18} color="#333" />
						</TouchableOpacity>
					</View>
					<View style={styles.calendar_header_item}>
						<TouchableOpacity
							noDefaultStyles={true}
							// onPress={this.press.bind(this)}
						>
							<Icon name="chevron-left" size={18} color="#333" />
						</TouchableOpacity>
						<Text style={styles.calendar_header_text}>June</Text>
						<TouchableOpacity
							noDefaultStyles={true}
							//  onPress={this.press.bind(this)}
						>
							<Icon name="chevron-right" size={18} color="#333" />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.calendar_weekdays}>{this.renderWeekdays()}</View>
				{/* <View style={styles.calendar_days}>...</View> */}
			</ScrollView>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: 'green',
		flexDirection: 'row',
		padding: 20,
	},
	header_item: {
		flex: 1,
	},
	header_button: {
		flexDirection: 'row',
	},
	text_center: {
		textAlign: 'center',
	},
	text_right: {
		textAlign: 'right',
	},
	header_text: {
		color: '#fff',
		fontSize: 20,
	},
	bold_text: {
		fontWeight: 'bold',
	},
	calendar_header: {
		flexDirection: 'row',
	},
	calendar_header_item: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 20,
		paddingRight: 40,
		paddingLeft: 40,
	},
	calendar_header_text: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	calendar_weekdays_text: {
		flex: 1,
		color: '#C0C0C0',
		textAlign: 'center',
	},
};
