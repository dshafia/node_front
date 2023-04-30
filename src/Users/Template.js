import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Template.css';

const Template = (props) => {
    return (
        <>
            <Navbar>
                <Navbar.Brand href="/">{props.title}</Navbar.Brand>
                <Nav className="ms-auto" defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link id="navbar-id" href="/home">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link id="navbar-id" eventKey="link-1">FAQ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link id="navbar-id" eventKey="link-2">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

export default Template