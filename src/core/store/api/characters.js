import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const charactersApi = createApi({
	reducerPath: 'charactersApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
	endpoints: builder => ({
		fetchCharactersList: builder.query({
			query: () => ({
				url: '/people',
				methods: 'GET',
			}),
		}),
	}),
});

export const { useFetchCharactersListQuery } = charactersApi;
