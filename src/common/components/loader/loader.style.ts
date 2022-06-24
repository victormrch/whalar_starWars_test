import styled from 'styled-components';

export const Loader = styled.div`
	position: relative;
	animation: flix 3s ease-in infinite alternate;

	:before {
		content: '';
		display: block;
		font-size: 0;
		width: 48px;
		height: 48px;
		background-color: #fff;
		background-image: radial-gradient(
				circle 12px at 22px 22px,
				#fccc6b 100%,
				transparent 0
			),
			radial-gradient(circle 10px at 6px 40px, #fc9c43 100%, transparent 0),
			radial-gradient(circle 14px at 31px -6px, #fc9c43 100%, transparent 0),
			radial-gradient(circle 5px at 40px 30px, #fc9c43 100%, transparent 0);
		border-radius: 50%;
		animation: rotate 1s linear infinite;
	}

	:after {
		content: '';
		position: absolute;
		top: 0%;
		transform: translate(-50%, -100%);
		left: 50%;
		width: 24px;
		height: 12px;
		background: #fff;
		border-radius: 50px 50px 0 0;
	}
	@keyframes flix {
		0%,
		60% {
			transform: rotate(-10deg);
		}
		100%,
		30%,
		80% {
			transform: rotate(5deg);
		}
	}
	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const LoaderTitle = styled.h2`
	color: #fccc6b;
`;
