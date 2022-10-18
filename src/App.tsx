import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'routes/home';
import './App.scss';

function App() {
	return (
		<Routes>
			<Route path='*' element={<Home />} />
		</Routes>
	);
}

export default App;
