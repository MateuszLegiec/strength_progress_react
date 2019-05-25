import React from "react";
import logo from '../../images/logo3.png';
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import AnchorLink from "react-anchor-link-smooth-scroll";

const BasicNavigation = (props) => {
        return (
            <div>
            <Navbar className="navigationBar" expand="lg" fixed="top">
                <Navbar.Brand href="#home"><button className={"btn btn-link"} onClick={props.onLogoClick}><img src={logo} alt="Logo"/></button></Navbar.Brand>
                <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <AnchorLink href="#home" className="navA text-white text-decoration-none">Home</AnchorLink>
                        <AnchorLink href="#about" className="navA text-white text-decoration-none">About</AnchorLink>
                        <AnchorLink href="#findUs" className="navA text-white text-decoration-none">Find us</AnchorLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         </div>
        )
    };

export default BasicNavigation;