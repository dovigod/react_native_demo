import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const weatherOptions = {
	Thunderstorm: {
		iconName: 'weather-lightning',
		gradient: ['#373B44', '#4286f4'],
		title: 'Thunderstorm in the house',
		subtitle: 'pickchuuuuu~~'
	},
	Drizzle: {
		iconName: 'weather-hail',
		gradient: ['#89F7FE', '#66A6FF'],
		title: 'Drizzle',
		subtitle: 'Is likes to rain...'
	},
	Rain: {
		iconName: 'weather-rainy',
		gradient: ['#00C6FB', '#005BEA'],
		title: 'Raining like a MF',
		subtitle: 'For more info look outside'
	},
	Snow: {
		iconName: 'weather-snowy',
		gradient: ['#7DE2FC', '#B9B6E5'],
		title: 'Cold',
		subtitle: 'fucking winter is comming'
	},
	Atmosphere: {
		iconName: 'weather-hail',
		gradient: ['#89F7FE', '#66A6FF']
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: ['#FF7300', '#FEF253'],
		title: 'ever grreeeen',
		subtitle: 'hello world'
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: ['#D7D2CC', '#304352'],
		title: 'Clouds',
		subtitle: 'slow as hell'
	},
	Mist: {
		iconName: 'weather-hail',
		gradient: ['#4DA0B0', '#D39D38'],
		title: 'Mist!',
		subtitle: 'my eyes r fucked.'
	},
	Dust: {
		iconName: 'weather-hail',
		gradient: ['#4DA0B0', '#D39D38'],
		title: 'Dusty',
		subtitle: 'Thanks a lot China 🖕🏻'
	},
	Haze: {
		iconName: 'weather-hail',
		gradient: ['#4DA0B0', '#D39D38'],
		title: 'Haze',
		subtitle: 'not human but weather'
	}
};

export default function Weather({ temprature, condition }) {
	return (
		<LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
				<Text style={styles.temp}>{temprature}°</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temprature: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Atmosphere',
		'Clear',
		'Clouds',
		'Haze',
		'Mist',
		'Dust'
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	temp: {
		fontSize: 42,
		color: 'white'
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		color: 'white',
		fontSize: 44,
		fontWeight: '300',
		marginBottom: 10,
		textAlign: 'left'
	},
	subtitle: {
		fontWeight: '600',
		color: 'white',
		fontSize: 24,
		textAlign: 'left'
	},
	textContainer: {
		alignItems: 'flex-start',
		paddingHorizontal: 40,
		justifyContent: 'center',
		flex: 1
	}
});
