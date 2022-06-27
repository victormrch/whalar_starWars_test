import ReactDOM from 'react-dom/client';
import App from './App';
import { AppRouter } from './core/router/router.component';
import './index.css';
import { store } from './core/store/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './core/theme/app.style';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<GlobalStyle />
		<AppRouter>
			<App />
		</AppRouter>
	</Provider>
);
