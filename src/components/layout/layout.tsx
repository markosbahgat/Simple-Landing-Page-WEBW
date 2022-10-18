import Footer from 'components/footer';
import React from 'react';
import Navbar from '../navbar/index';

type Props = {
	children: React.ReactNode;
};

const Layout = (props: Props) => {
	return (
		<div>
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
