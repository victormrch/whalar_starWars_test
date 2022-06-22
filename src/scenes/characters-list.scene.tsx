import React from 'react';
import { Link } from 'react-router-dom';

export const CharactersListScene: React.FC = () => {
	return (
		<>
			<h1>Hello from List Scene</h1>
			<Link to='/character_details/1'>Navigate to characters details</Link>
		</>
	);
};
