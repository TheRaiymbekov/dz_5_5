import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const AppNavbar = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='/'>API</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link as={NavLink} to="/cats">Random Cats</Nav.Link>
                <Nav.Link as={NavLink} to="/jokes">Jokes</Nav.Link>
                <Nav.Link as={NavLink} to="/rickandmorty">RickAndMorty</Nav.Link>
                <Nav.Link as={NavLink} to="/attackontitan">Attack on titan</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default AppNavbar