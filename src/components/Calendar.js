import React, { Component } from 'react';

import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import { NavLogo, CalendarButton } from './common';

export default class Calendar extends Component {
	static navigationOptions = () => {
		return {
			header: null,
		};
	};

	renderWeekdays() {
		const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		return weekdays.map(day => {
			return (
				<Text key={day} style={styles.calendar_weekdays_text}>
					{day.toUpperCase()}
				</Text>
			);
		});
	}

	renderWeeks() {
		let past_month_days = range(27, 31);
		let this_month_days = range(1, 30);

		let days = past_month_days.concat(past_month_days, this_month_days);
		let grouped_days = this.getWeeksArray(days);

		return grouped_days.map((week_days, index) => {
			return (
				<View key={index} style={styles.week_days}>
					{this.renderDays(week_days)}
				</View>
			);
		});
	}

	getWeeksArray(days) {
		var weeks_r = [];
		var seven_days = [];
		var count = 0;
		days.forEach(day => {
			count += 1;
			seven_days.push(day);
			if (count == 7) {
				weeks_r.push(seven_days);
				count = 0;
				seven_days = [];
			}
		});
		return weeks_r;
	}

	renderDays(week_days) {
		return week_days.map((day, index) => {
			return (
				<CalendarButton
					label={day}
					key={index}
					// onPress={this.press.bind(this)}
					style={{ button: styles.day, label: styles.day_text }}
					noDefaultStyles={true}
				>
					{day}
				</CalendarButton>
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
				<View style={styles.calendar_days}>{this.renderWeeks()}</View>
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
	calendar_weekdays: {
		flex: 1,
		flexDirection: 'row',
	},
	calendar_weekdays_text: {
		flex: 1,
		color: '#C0C0C0',
		textAlign: 'center',
	},
	week_days: {
		flexDirection: 'row',
	},
	day: {
		flex: 1,
		backgroundColor: '#F5F5F5',
		padding: 17,
		margin: 2,
	},
	day_text: {
		textAlign: 'center',
		color: '#A9A9A9',
		fontSize: 25,
	},
};
