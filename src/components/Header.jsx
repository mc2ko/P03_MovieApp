import React from 'react';
import styled from 'styled-components';
import Weather from './Weather';
import bgimg from './asset/header_z100.jpg';
import imgShadow from './asset/header_z200.png';
import logo from './asset/logo_z300.png';

const Container = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
	position: fixed;
	z-index: 300;
	top: 0;
	width: 100%;
	height: 80px;
	min-width: 720px;
	background-image: url(${bgimg});
	background-repeat: no-repeat;
	background-size: 100% 80px;

	@media screen and (max-width: 720px) {
		width: 100%;
	}

	&:before {
		display: block;
		position: absolute;
		top: 16px;
		height: 74px;
		z-index: 500;
		width: 100%;
		background-image: url(${imgShadow});
		background-size: 100% 74px;
		content: '';
	}
`;

const HeaderLeft = styled.div`
	display: flex;
	position: relative;
	left: 20px;
	top: 9px;
	width: 30%;
`;

const Logo = styled.p`
	position: relative;
	top: -9px;
	width: 48px;
	height: 48px;
	background-image: url(${logo});
`;

const Title = styled.h1`
	position: relative;
	left: 10px;
	font-weight: 700;
	font-size: 26px;

	&:nth-of-type(2) {
		position: absolute;
		left: 58px;
		top: 24px;
		color: #23406e;
		opacity: 0.5;
		transform: scaleY(-100%);
	}
`;

const Today = styled.div`
	display: flex;
	justify-content: center;
	width: 40%;
	height: 80px;
	line-height: 80px;
	color: #445d7f;
	font-size: 30px;
	font-weight: 500;

	&:nth-of-type(2) {
		position: absolute;
		left: 30%;
		top: 39%;
		opacity: 0.2;
		transform: scaleY(-100%);
	}
`;

const WhiteColor = styled.div`
	position: relative;
	color: #fff;
	font-weight: 400;
	font-size: 40px;
	bottom: 2px;
`;

const YearColor = styled(WhiteColor)``;

const MonthColor = styled(WhiteColor)``;

const DateColor = styled(WhiteColor)``;

const Header = () => {
	const newDate = new Date();
	const fyear = String(newDate.getFullYear());
	const year = fyear.substring(2, 4);
	const month = newDate.getMonth() + 1;
	const date = newDate.getDate();
	// const day = newDate.getDay();
	// const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

	return (
		<Container>
			<HeaderLeft>
				<Logo />
				<Title>MOVIE APP</Title>
				<Title>MOVIE APP</Title>
			</HeaderLeft>
			<Today>
				<YearColor>{year}</YearColor>년<MonthColor>{month}</MonthColor>월
				<DateColor>{date}</DateColor>일
			</Today>
			<Today>
				<YearColor>{year}</YearColor>년<MonthColor>{month}</MonthColor>월
				<DateColor>{date}</DateColor>일
			</Today>
			<Weather />
		</Container>
	);
};

export default Header;
