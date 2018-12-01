import React from 'react';
import LogoIMG from "../images/logo-full.svg";
import "./navigation.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
                <NavLink href="#">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Communities</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>	
              <NavItem>
                <NavLink href="#">Partners</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Mischief</NavLink>
              </NavItem>			  
              <NavItem>
                <NavLink href="/blog">Shop</NavLink>
              </NavItem>			  			  
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

