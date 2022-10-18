import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import Layout from 'components/layout/layout';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<App />
				</Layout>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
