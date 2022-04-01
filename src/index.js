import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './css/normalize.css';
import './icomoon/style.css';
import './css/index.css';


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
	<div className='wrapper'>
		<Header />
		<Main />
		<Footer />
	</div>
);

// ReactDOM.render(
//   <div className='wrapper'>
// 		<Header />
// 		<Main />
// 	</div>,
//   document.getElementById('root')
// );

