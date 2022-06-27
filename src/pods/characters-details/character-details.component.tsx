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
	CharacterDetailButtonContainer,
	CharacterDetailGoBackContainer,
	CharacterDetailGoBackIcon,
	CharacterDetailsFilmContainer,
	CharacterDetailsFilmIcon,
	CharacterDetailsTitleContainer,
	CharacterDetailsTitleIcon,
	CharactersDetailsCharacteristicsGrid,
	CharactersDetailsContainer,
	CharactersDetailsFilm,
	CharactersDetailsTitle,
} from './character-details.style';
interface RootState {
	characterDetails: any;
	films: any;
}

export const CharacterDetailsComponent: React.FC = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();

	const { character, isError, isLoading, isFetching, isSuccess } = useSelector(
		(state: RootState) => state.characterDetails
	);

	const {
		films,
		isErrorFilms,
		isLoadingFilms,
		isFetchingFilms,
		isSuccessFilms,
	} = useSelector((state: RootState) => state.films);

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
				{isSuccess && isSuccessFilms ? (
					<CharacterDetailGoBackContainer>
						<CharacterDetailGoBackIcon onClick={HandleBackMainList} />
						<CharacterDetailButtonContainer>
							<CommonButton
								buttonName='Back to Main List'
								onClick={HandleBackMainList}
							/>
						</CharacterDetailButtonContainer>
					</CharacterDetailGoBackContainer>
				) : null}

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
						<CharacterDetailsTitleContainer>
							<CharacterDetailsTitleIcon />
							<CharactersDetailsTitle>{character.name}</CharactersDetailsTitle>
						</CharacterDetailsTitleContainer>
						<CharactersDetailsCharacteristicsGrid>
							<h2>Height {character.height}cm</h2>
							<h2>Gender : {character.gender}</h2>
							<h2>Mass : {character.mass}Kg</h2>
							<h2>Hair color : {character.hair_color}</h2>
							<h2>Eye color : {character.eye_color}</h2>
							<h2>Skin color : {character.skin_color}</h2>
							<h2>Birth year : {character.birth_year}</h2>
						</CharactersDetailsCharacteristicsGrid>
						<div>
							<CharacterDetailsFilmContainer>
								<CharacterDetailsFilmIcon />
								<CharactersDetailsTitle>
									{getNumberFilms(character.films)}
								</CharactersDetailsTitle>
							</CharacterDetailsFilmContainer>

							{isErrorFilms ? (
								<CenteredPodLayout>
									<ErrorComponent />
								</CenteredPodLayout>
							) : null}
							{isLoadingFilms && isFetchingFilms ? (
								<CenteredPodLayout>
									<LoaderComponent />
								</CenteredPodLayout>
							) : null}
							{isSuccessFilms
								? films.map((film: string, index: number) => (
										<CharactersDetailsFilm key={index}>
											{film}
										</CharactersDetailsFilm>
								  ))
								: null}
						</div>
					</>
				) : null}
			</CharactersDetailsContainer>
		</>
	);
};
