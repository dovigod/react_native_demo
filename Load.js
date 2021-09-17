import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Load = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.txt}>Getting demos..</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 30,
		paddingVertical: 100,
		backgroundColor: '#FDF6AA'
	},
	txt: {
		color: 0x2c2c2c,
		fontSize: 30
	}
});

export default Load;
