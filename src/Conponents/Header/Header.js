import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
    <Nav justify variant="tabs" defaultActiveKey="/home" className='bg-success'>
      <Nav.Item>
        <Nav.Link className='text-white font-bold'>TAL DEVES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Servics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">About</Nav.Link>
      </Nav.Item>
    </Nav>
    );
};

export default Header;