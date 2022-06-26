import styled from 'styled-components';

export const CenteredLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 1.25rem;
	height: 100vh;

	@media (max-width: 500px) {
		height: auto;
	}
`;
