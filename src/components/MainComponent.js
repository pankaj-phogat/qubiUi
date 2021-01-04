import React, { Component } from 'react';
import {Navbar} from 'reactstrap';
import {Switch, Redirect, Route} from 'react-router-dom';
import Header from './HeaderComponent';
import Body from './BodyComponent';
import {UnderDevelopment} from './UnderDevelopmentComponent';
class Main extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={Body}  />
					<Route path="/underDev" component={UnderDevelopment} />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
} 

export default Main;