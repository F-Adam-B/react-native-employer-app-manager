import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';
import { NavLogo } from './common/NavLogo';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Loginnnnnnnn',
			// headerLeft: (
			// 	<NavLogo
			// 		onPress={() => {
			// 			navigation.navigate('drawerStack');
			// 		}}
			// 	/>
			// ),
		};
	};

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		console.log('this.props: ', this.props);
		const navigationProps = this.props.navigation;
		this.props.loginUser({ email, password, navigationProps });
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle}>{this.props.error}</Text>
				</View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				<Text>Login</Text>
			</Button>
		);
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				<View>{this.renderError()}</View>

				<CardSection>{this.renderButton()}</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
	},
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;
	return {
		email,
		password,
		error,
		loading,
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
