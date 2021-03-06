import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getIdCharacter, getNumberFilms } from '../../common-app/utils';
import { CommonButton } from '../../common/components/common-button';
import { ErrorComponent } from '../../common/components/error';
import { LoaderComponent } from '../../common/components/loader';
import { CenteredLayout } from '../../layout';
import {
	CharacterListInfoContainer,
	CharacterListTitle,
	CharacterListTitleContainer,
	CharactersListCardContainer,
	CharactersListContainer,
} from './characters-list.style';
import { CharactersListModel } from './characters-list.vm';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersAction } from '../../core/store/actions/charactersActions';
import { routes } from '../../core/router/routes';

interface RootState {
	characters: any;
}

export const CharactersListComponent: React.FC = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const { characters, isError, isLoading, isFetching, isSuccess, pagination } =
		useSelector((state: RootState) => state.characters);

	React.useEffect(() => {
		if (characters.length === 0) {
			dispatch<any>(fetchCharactersAction(pagination.next));
		}
	}, []);

	const onShowMoreCharacters = () => {
		dispatch<any>(fetchCharactersAction(pagination.next));
	};

	const onClickDetail = (url: string) => () => {
		const characterId = getIdCharacter(url);
		navigate(routes.character_details(characterId));
	};

	return (
		<>
			{isError ? (
				<CenteredLayout>
					<ErrorComponent />
				</CenteredLayout>
			) : null}
			{isLoading && isFetching ? (
				<CenteredLayout>
					<LoaderComponent />
				</CenteredLayout>
			) : null}
			{isSuccess ? (
				<>
					<CharacterListTitle>List of characters</CharacterListTitle>
					<CharactersListContainer>
						{characters?.map(
							(characters: CharactersListModel, items: number) => (
								<CharactersListCardContainer
									key={items}
									onClick={onClickDetail(characters.url)}
								>
									<CharacterListTitleContainer>
										<h1>{characters.name}</h1>
									</CharacterListTitleContainer>
									<CharacterListInfoContainer>
										<h3>{getNumberFilms(characters.films)}</h3>
										<h3>Birth year: {characters.birth_year}</h3>
									</CharacterListInfoContainer>
								</CharactersListCardContainer>
							)
						)}
					</CharactersListContainer>

					{pagination.next !== null ? (
						<CommonButton
							buttonName='Load More'
							onClick={onShowMoreCharacters}
						/>
					) : null}
				</>
			) : null}
		</>
	);
};
