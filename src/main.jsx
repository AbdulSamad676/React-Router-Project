import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import About from './componants/About.jsx';
import Home from './componants/Home.jsx';
import Contact from './componants/Contact.jsx';
import Layout from './componants/Layout.jsx';
import './index.css';
import User from './componants/User.jsx';

// let router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Layout />,
// 		children: [
// 			{
// 				path: '',
// 				element: <Home />,
// 			},
// 			{
// 				path: 'about',
// 				element: <About />,
// 			},
// 			{
// 				path: 'contact',
// 				element: <Contact />,
// 			},
// 		],
// 	},
// ]);

// another approach for routers

let router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route path='' element={<Home />} />
			<Route path='about' element={<About />} />
			<Route path='contact' element={<Contact />} />
			<Route path='user/:id' element={<User />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
