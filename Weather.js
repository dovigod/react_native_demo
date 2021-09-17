import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export default function Weather({ temprature }) {
	return (
		<View style={styles.container}>
			<Text>{temprature}</Text>
		</View>
	);
}

Weather.propTypes = {
	temprature: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
});
