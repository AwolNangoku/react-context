import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const user = {
	name: 'Khuze',
	lastname: 'Mayekiso'
}

ReactDOM.render(<App user={user}/>, document.getElementById('root'));
