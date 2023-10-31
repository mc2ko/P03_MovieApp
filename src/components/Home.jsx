import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Movies from './Movies';
import styled from 'styled-components';

const MovieList = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 12px;
	min-width: 800px;

	@media screen and (max-width: 720px) {
		width: 100%;
	}
`;

const Home = () => {
	const [movies, setMovies] = useState([]);

	const newDate = new Date();
	const year = newDate.getFullYear().toString();
	let month = (newDate.getMonth() + 1).toString();
	if (month < 10) {
		month = '0' + month;
	}
	const date = '01';
	const releaseDts = year + month + date;
	// console.log(releaseDts);

	const url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&nation=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD&releaseDts=${releaseDts}&detail=Y&ServiceKey=852Y82BA7VQLZ568227M`;

	const getMovies = () => {
		fetch(url)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				const movies = data.Data[0].Result;
				// console.log(movies);
				setMovies(movies);
			});
	};

	useEffect(() => {
		getMovies();
	}, []);

	// const posters = movies.map((movie) => {
	// 	return movie.posters.split('|', 1);
	// });

	// console.log(posters);

	return (
		<div>
			<MovieList>
				{movies.map((movie) => {
					return <Movies key={movie.movieSeq} movie={movie} />;
				})}
			</MovieList>
		</div>
	);
};

export default Home;
