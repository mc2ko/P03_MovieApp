import React from 'react';
import styled from 'styled-components';
import imgCover from './asset/movie_list_z200.png';
import imgNone from './asset/no_image_z0.png';

const Movie = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MoviePoster = styled.div`
	width: 315px;
	height: 450px;
	margin: 10px 36px 14px 36px;
	border-radius: 16px;
	background-image: url(${imgNone});
	background-repeat: no-repeat;
	background-position: center center;

	@media screen and (max-width: 760px) {
		width: 210px;
		height: 300px;
		margin: 10px 10px 14px 10px;
		border-radius: 10px;
	}
	> img {
		display: block;
		width: 315px;
		height: 450px;
		border-radius: 16px;

		@media screen and (max-width: 760px) {
			width: 210px;
			height: 300px;
			border-radius: 10px;
		}
	}
`;

const MovieCover = styled.p`
	position: absolute;
	width: 315px;
	height: 450px;
	margin-top: 10px;
	background-image: url(${imgCover});
	background-size: contain;

	@media screen and (max-width: 760px) {
		width: 210px;
		height: 300px;
	}
`;

const MovieTitle = styled.p`
	overflow: hidden;
	width: 315px;
	height: 28px;
	line-height: 28px;
	margin-bottom: 28px;
	font-size: 28px;
	text-align: center;
	text-overflow: ellipsis;
	white-space: nowrap;

	@media screen and (max-width: 760px) {
		width: 210px;
		font-size: 24px;
	}
`;

const Movies = ({ movie }) => {
	return (
		<Movie>
			<MoviePoster>
				<img src={movie.posters.split('|', 1)} alt="#" />
			</MoviePoster>
			<MovieCover />
			<MovieTitle>{movie.title}</MovieTitle>
		</Movie>
	);
};

export default Movies;
