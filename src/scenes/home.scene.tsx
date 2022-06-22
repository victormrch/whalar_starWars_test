import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../core/router/routes';

export const HomeScene: React.FC = () => {
	const navigate = useNavigate();

	const HandleClickStart = () => {
		navigate(routes.character_list);
	};
	return (
		<>
			<h1>Hello from Home Scene</h1>
			<button onClick={HandleClickStart}>Start</button>
		</>
	);
};
