import Footer from './Footer';
import Header from './Header';
import React from 'react';
import SetData from './SetData';

function Layout({ children }) {
	return (
		<>
			<React.Suspense fallback={<div>loading...</div>}>
				<SetData />
			</React.Suspense>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
