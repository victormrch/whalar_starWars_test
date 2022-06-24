import styled from 'styled-components';

export const CenteredLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 20px;
	height: 100vh;

	@media (max-width: 500px) {
		height: auto;
	}
`;
