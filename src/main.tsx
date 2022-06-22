import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppRouter } from './core/router/router.component';
import './index.css';
import { store } from './core/store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<AppRouter>
				<App />
			</AppRouter>
		</Provider>
	</React.StrictMode>
);
