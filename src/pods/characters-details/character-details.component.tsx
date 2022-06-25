import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getNumberFilms } from '../../common-app/utils';
import { CommonButton } from '../../common/components/common-button';
import { ErrorComponent } from '../../common/components/error';
import { LoaderComponent } from '../../common/components/loader';
import { routes } from '../../core/router/routes';
import { fetchCharactersDetailsAction } from '../../core/store/actions/characterDetailsActions';
import { fetchFilmsAction } from '../../core/store/actions/filmsActions';
import { CenteredPodLayout } from '../../layout';
import {
	CharactersDetailsCharacteristicsGrid,
	CharactersDetailsContainer,
	CharactersDetailsTitle,
} from './character-details.style';

export const CharacterDetailsComponent: React.FC = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();

	const { character, isError, isLoading, isFetching, isSuccess } = useSelector(
		state => state.characterDetails
	);

	const {
		films,
		isErrorFilms,
		isLoadingFilms,
		isFetchingFilms,
		isSuccessFilms,
	} = useSelector(state => state.films);

	React.useEffect(() => {
		dispatch<any>(fetchCharactersDetailsAction(id));
	}, []);

	React.useEffect(() => {
		dispatch<any>(fetchFilmsAction(character.films));
	}, [character.films]);

	const HandleBackMainList = () => {
		navigate(routes.character_list);
	};
	return (
		<>
			<CharactersDetailsContainer>
				<CommonButton
					buttonName='Back to Main List'
					onClick={HandleBackMainList}
				/>
				{isError ? (
					<CenteredPodLayout>
						<ErrorComponent />
					</CenteredPodLayout>
				) : null}
				{isLoading && isFetching ? (
					<CenteredPodLayout>
						<LoaderComponent />
					</CenteredPodLayout>
				) : null}
				{isSuccess ? (
					<>
						<CharactersDetailsTitle>{character.name}</CharactersDetailsTitle>
						<CharactersDetailsCharacteristicsGrid>
							<h2>Height: {character.height}cm</h2>
							<h2>Gender: {character.gender}</h2>
							<h2>Mass: {character.mass}Kg</h2>
							<h2>Hair color: {character.hair_color}</h2>
							<h2>Eye color: {character.eye_color}</h2>
							<h2>Skin color: {character.skin_color}</h2>
							<h2>Birth year: {character.birth_year}</h2>
						</CharactersDetailsCharacteristicsGrid>
						<div>
							<CharactersDetailsTitle>
								{getNumberFilms(character.films)}
							</CharactersDetailsTitle>
							{isSuccessFilms
								? films.map((film: string, index: number) => (
										<li key={index}>{film}</li>
								  ))
								: null}
						</div>
					</>
				) : null}
			</CharactersDetailsContainer>
		</>
	);
};
