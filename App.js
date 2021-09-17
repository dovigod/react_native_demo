import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Load from './Load';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'b8073670c0f44fc3a0db2f8529e82757';
const getWeather = async (latitude, longitude) => {
	const { data } = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
	);

	console.log(data);
	return {
		temp: data.main.temp,
		weather: data.weather,
		condition: data.weather[0].main
	};
};

export default function App() {
	const [state, setState] = useState({
		isLoading: true
	});
	const useMounting = () => {
		const getLocation = async () => {
			try {
				setState({ isLoading: true });

				await Location.requestForegroundPermissionsAsync();
				const {
					coords: { altitude, latitude, longitude }
				} = await Location.getCurrentPositionAsync(); // need permission
				// await getWeather(latitude, longitude).then((responce) => {
				// 	setState({ altitude, latitude, longitude, isLoading: false });
				// 	const tar = {
				//     isLoading : state.isLoading
				//   }

				// });

				await getWeather(latitude, longitude).then((res) =>
					setState({
						altitude,
						latitude,
						longitude,
						isLoading: false,
						temp: res.temp,
						weather: res.weather,
						condition: res.condition
					})
				);
			} catch (e) {
				Alert.alert('Error on either Authentication or location finding..');
			}
		};

		useEffect(() => {
			getLocation();
		}, [null]);
	};

	const mt = useMounting();

	return state.isLoading ? (
		<Load />
	) : (
		<Weather temprature={Math.round(Math.round(state.temp))} condition={state.condition} />
	);
}

const styles = StyleSheet.create({});

/*
default layout => column
*/
