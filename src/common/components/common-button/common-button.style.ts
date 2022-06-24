import styled from 'styled-components';

// --clr-neon: #2E67FF;
// --clr-bg: #173278;

export const ButtonContainer = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
	padding: 10px;
`;

export const ButtonCommon = styled.button`
	font-size: 2rem;
	display: inline-block;
	cursor: pointer;
	text-decoration: none;
	color: #2e67ff;
	background: #173278;
	border: #2e67ff 0.125em solid;
	padding: 0.25em 1em;
	border-radius: 0.25em;
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
	box-shadow: inset 0 0 0.5em 0 #2e67ff, 0 0 0.5em 0 #2e67ff;
	position: relative;

	::before {
		pointer-events: none;
		content: '';
		position: absolute;
		background: #2e67ff;
		top: 120%;
		left: 0;
		width: 100%;
		height: 100%;
		transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
		filter: blur(1em);
		opacity: 0.7;
	}

	::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 0 0 2em 0.5em #2e67ff;
		opacity: 0;
		background-color: #2e67ff;
		z-index: -1;
		transition: opacity 100ms linear;
	}

	:hover {
		background: #2e67ff;
		color: #173278;
		text-shadow: none;
	}

	:hover::before {
		opacity: 1;
	}

	:hover::after {
		opacity: 1;
	}
`;
