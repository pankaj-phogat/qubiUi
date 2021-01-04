import React, { Component } from 'react';
import {Navbar , NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';  

class Header extends Component{
	constructor(props){
		super(props);
		this.state={
			isNavOpen:false
		}
		this.toggleNav=this.toggleNav.bind(this);
	}

	toggleNav(){
		this.setState({isNavOpen: !this.state.isNavOpen})
	}
	render(){
		return(
			<div className="header pt-5" >
				<Navbar dark expand="md">
					<NavbarBrand href="/">
						<h3>QUBI BRAND LOGO</h3> 
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNav} />
					<Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar className="ml-auto">
                                <NavItem className="mr-2">
                                    <NavLink className="nav-link" to="/underDev">
                                        HOME
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mr-2">
                                    <NavLink className="nav-link" to="/underDev">
                                        ABOUT US
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mr-2">
                                    <NavLink className="nav-link" to="/underDev">
                                        PRODUCTS
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mr-2">
                                    <NavLink className="nav-link" to="/underDev">
                                        GET A QUBI
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mr-2">
                                    <NavLink className="nav-link" to="/underDev">
                                        CONTACT US
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    </Collapse> 
				</Navbar>
			</div>

		);
	}
}

export default Header;