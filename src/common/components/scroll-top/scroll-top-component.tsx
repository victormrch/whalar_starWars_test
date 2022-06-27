import React, { useState, useEffect } from 'react';

import { ScrollContainer, ScrollIcon } from './scroll-top.style';

export const ScrollToTop: React.FC = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 150) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<>
			<ScrollContainer>
				{showTopBtn && <ScrollIcon onClick={goToTop} />}
			</ScrollContainer>
		</>
	);
};
