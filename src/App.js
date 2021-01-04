import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
  	<BrowserRouter>
	  	<div className="App">
			<Main />
		</div>
	</BrowserRouter>
  );
}

export default App;
