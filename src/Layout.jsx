import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import imgSection from './components/asset/section_bgi_z0.jpg';

const Wrap = styled.div`
	position: relative;
	height: 100vh;
	color: #fff;
	background-color: #141e28;
	min-width: 720px;

	@media screen and (max-width: 720px) {
		width: 100%;
	}
`;

const Section = styled.div`
	margin-top: 80px;
	background-image: url(${imgSection});
	background-size: cover;

	@media screen and (max-width: 720px) {
		width: 100%;
	}
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

html,
body {
   width: 100%;
   height: 100%;
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
small,
p,
blockquote,
q,
address,
strong,
em,
img,
video,
ul,
ol,
li,
dl,
dt,
dd,
a,
figure,
figcaption,
mark,
i,
b,
header,
section,
article,
footer,
nav,
aside,
table,
thead,
tbody,
tfoot,
tr,
th,
td {
   margin: 0;
   padding: 0;
   border: 0;
}

table {
   border-collapse: collapse;
}

ul,
ol,
li {
   list-style: none;
}
address,
em {
   font-style: normal;
}

hr,
caption {
   display: none;
}

a:link,
a:visited,
a:hover,
a:active {
   color: #222;
   text-decoration: none;
}

q {
   quotes: none;
}

body {
   color: #222;
   font-weight: 300;
   font-size: 13px;
   font-family: 'Noto Sans KR', 돋움, 굴림;
}

.text-center {
   height: 100px;
   line-height: 100px;
   text-align: center;
}

.blind {
   display: none;
}
.sr-only{
   position: absolute;
   left: -9999px;
}

`;

const Layout = () => {
	return (
		<Wrap>
			<GlobalStyle />
			<Header />
			<Section>
				<Outlet />
			</Section>
			<Footer />
		</Wrap>
	);
};

export default Layout;
