import React from "react";
import './Navbar.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar: React.FC = () => {


    return (
            <Navbar variant="dark" bg="primary" expand="lg" sticky="top" className='Navbar'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="Navbar__link" to="/" >Все котики</NavLink>
                            <NavLink className="Navbar__link" to="/favourite">Любимые котики</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default NavigationBar;
