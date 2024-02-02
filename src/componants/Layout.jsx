import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Layout() {
	return (
		<>
			<Header />
			{/* the header and the footer will be changed but the outlet componants will be changed */}
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
