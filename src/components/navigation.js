import React from 'react';
import "font-awesome/css/font-awesome.min.css";
import LogoIMG from "../images/logo-full.svg";
import "./navigation.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={LogoIMG} alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Auteurs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">Cinema</NavLink>
              </NavItem>	
              <NavItem>
                <NavLink href="#">Get Updates</NavLink>
              </NavItem>	
              <NavItem>
                <NavLink href="#"><i className="fa fa-twitter"></i></NavLink>
              </NavItem>			  
              <NavItem>
                <NavLink href="#"><i className="fa fa-facebook"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-instagram"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-youtube"></i></NavLink>
              </NavItem>			  
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

