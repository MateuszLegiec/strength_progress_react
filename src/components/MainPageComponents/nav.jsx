import React, {Component} from "react";
import logo from '../../images/logo3.png';
import '../../styles/basicStyle.css'
import {
    Navbar,
    Nav
} from 'react-bootstrap'


export default class MainWindowNav extends Component{

    render(){
        return  <Navbar className="navigationBar" expand="lg" fixed="top">
            <Navbar.Brand href="#home"><img src={logo} alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="text-white navA" onClick={this.props.onTrainingButtonClick}>Your Trainings</Nav.Link>
                    <Nav.Link className="text-white navA" onClick={this.props.onProgressButtonClick}>Your Progress</Nav.Link>
                    <Nav.Link className="text-white navA" onClick={this.props.onAccountButtonClick}>Your Account</Nav.Link>
                    <Nav.Link className="text-white navA" onClick={this.props.onSignOut}>Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>;
    }

}
