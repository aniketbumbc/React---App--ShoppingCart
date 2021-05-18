import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, Container } from 'reactstrap';

const Heading = () => {
  return (
    <Navbar color='dark'>
      <Container>
        <NavbarBrand href='/'>Product</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className='btn btn-primary' to='/add'>
              {' '}
              Add Product
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
