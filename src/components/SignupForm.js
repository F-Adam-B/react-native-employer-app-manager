import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, passwordConfirmed, passwordError } from '../actions';

class SignupForm extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Signup',
		};
	};

	validatePassword(text) {
		this.props.passwordConfirmed(text);
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	goToLogin() {
		this.props.navigation.navigate('login');
	}

	onButtonPress() {
		const { email, password } = this.props;
		const navigationProps = this.props.navigation;
		if (this.props.password !== this.props.passwordConfirm) {
			this.props.passwordError();
		} else {
			this.props.loginUser({ email, password, navigationProps });
		}
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
				<Text>Signup</Text>
			</Button>
		);
	}

	renderLoginButton() {
		return (
			<Button style={styles.buttonStyle} onPress={this.goToLogin.bind(this)}>
				<Text>Got an Account?</Text>
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
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="confirm password"
						onChangeText={this.validatePassword.bind(this)}
						value={this.props.passwordConfirm}
						// validate={matches('Password')}
					/>
				</CardSection>

				<View>{this.renderError()}</View>

				<CardSection>{this.renderButton()}</CardSection>
				<CardSection>{this.renderLoginButton()}</CardSection>
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
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
	},
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading, passwordConfirm } = auth;
	return {
		email,
		password,
		error,
		loading,
		passwordConfirm,
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, passwordConfirmed, passwordError })(
	SignupForm
);
