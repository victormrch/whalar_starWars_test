import React from 'react';
import {
	FooterContainer,
	FooterIconLeft,
	FooterIconRight,
	FooterLeftContainer,
	FooterRightContainer,
} from './app-footer.style';
import deadStar from '../../../assets/dead_star.svg';
import yoda from '../../../assets/yoda_icon.svg';

export const AppFooter: React.FC = () => {
	return (
		<>
			<FooterContainer>
				<FooterLeftContainer>
					<FooterIconLeft src={deadStar} alt='Dead star icon'></FooterIconLeft>
					<h2>Created and designed for Victor Ramon</h2>
				</FooterLeftContainer>
				<FooterRightContainer>
					<h2>May the Force Be With You</h2>
					<FooterIconRight src={yoda} alt='Yoda icon'></FooterIconRight>
				</FooterRightContainer>
			</FooterContainer>
		</>
	);
};
