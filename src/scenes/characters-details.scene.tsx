import React from 'react';
import { Link } from 'react-router-dom';

export const CharacterDetailsScene: React.FC = () => {
	return (
		<>
			<h1>Hello from Details Scene</h1>
			<Link to='/character_list'>Go back</Link>
		</>
	);
};
