import React from 'react';
import HeadBttm from './HeadBttm';
import HeadTop from './HeadTop';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<HeadTop />
				<HeadBttm />
			</div>
		</header>
	);
}

export default Header;