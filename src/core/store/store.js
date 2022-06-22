import { configureStore } from '@reduxjs/toolkit';

import { charactersApi } from './api/characters';

export const store = configureStore({
	reducer: {
		[charactersApi.reducerPath]: charactersApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(charactersApi.middleware),
});
