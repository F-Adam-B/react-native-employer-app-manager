import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, TouchableHighlight } from 'react-native';

import { CardSection, Button, Card, Confirm } from '.';
import { logoutUser } from '../../actions';

class Logout extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Logout',
		};
	};

	state = { showModal: false };

	onModalPress() {
		this.setState({
			showModal: true,
		});
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	onAccept() {
		const navigationProps = this.props.navigation;
		this.props.logoutUser({ navigationProps });
		this.setState({ showModal: false });
	}

	render() {
		return (
			<Card style={{ height: 300, backgroundColor: 'transparent' }}>
				<CardSection>
					<Button onPress={this.onModalPress.bind(this)}>Logout</Button>
				</CardSection>

				<Confirm
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to logout?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading, user } = auth;
	return {
		email,
		password,
		error,
		loading,
		user,
	};
};

export default connect(mapStateToProps, { logoutUser })(Logout);
