import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/Detail" element={<Detail />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
