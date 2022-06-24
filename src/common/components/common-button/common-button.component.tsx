import React from 'react';
import { ButtonCommon, ButtonContainer } from './common-button.style';

interface IButtonProps {
	buttonName: string;
	onClick?:
		| ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
		| undefined;
}

export const CommonButton: React.FC<IButtonProps> = ({
	onClick,
	buttonName,
}) => {
	return (
		<>
			<ButtonContainer>
				<ButtonCommon onClick={onClick}>{buttonName}</ButtonCommon>
			</ButtonContainer>
		</>
	);
};
