import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	position: relative;
	right: 10px;
	width: 30%;
	justify-content: end;
	align-items: center;
	height: 80px;

	> img {
		margin-left: 7px;
		display: block;
		width: 60px;
		height: 70px;
	}
	> p {
		margin-top: -5px;
		color: #fff;
		text-align: center;
		> span {
			display: block;
			margin-top: 5px;
			font-weight: 400;
			font-size: 20px;
		}

		&:nth-of-type(2) {
			position: absolute;
			left: 39.8%;
			top: 72%;
			opacity: 0.2;
			transform: scaleY(-100%);
		}
	}
`;
const Weather = () => {
	const [wther, setWther] = useState('');
	const { location, temp, icon } = wther;

	const getweather = (position) => {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;

		// console.log(lat, lon);

		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=9de7f74ff4ab4a9e871208028e626bf0`;

		fetch(url)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				// const weather = data.weather[0].main;
				const location = data.name;
				const temp = (data.main.temp - 273.15).toFixed(1);
				const iconCode = data.weather[0].icon;
				const icon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

				const wther = { location, temp, icon };
				setWther(wther);
			});
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(getweather);
	}, []);

	return (
		<Container>
			<p>
				{location} <span>{temp}℃</span>
			</p>
			<p>
				{location} <span>{temp}℃</span>
			</p>
			<img src={icon} alt="#" />
		</Container>
	);
};

export default Weather;
