import React from 'react';
interface ImgProps {
	onClick?: () => any;
}

const LOGO: React.FC<ImgProps> = ({ onClick }) => (
	<div
		style={{ position: 'relative', width: '120px', height: '45px' }}
		onClick={onClick}>
		<img src={'/assets/logo.png'} alt='Stvdy Logo' />
	</div>
);

export default LOGO;
