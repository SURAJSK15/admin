import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


const NavbarComp = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar-bg">
                <Container>
                    <NavLink to="/" className="logo">App Logo</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navbar-list">
                            <NavLink to="/">Dashboard</NavLink>
                            <NavLink to="/createads">Create Ads</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComp;




