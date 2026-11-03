import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dashboard } from './Dashboard/Dashboard';

import { NavLink } from 'react-router';

export function NavBar(){

    return(<>
    
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
           <NavLink to="/" className="nav-link" style={{color:"white", fontWeight:"400"}}>Home</NavLink>
          <Nav className="me-auto">
            <NavLink to="/about" className="nav-link" style={{color:"white", fontWeight:"400"}}>About</NavLink>
            <NavLink to="/contact" className="nav-link" style={{color:"white", fontWeight:"400"}}>Contact</NavLink>
            <NavLink to = "/product" className="nav-link" style={{color:"white", fontWeight:"400"}}>Product</NavLink>
            <NavLink to = "/dashboard" className="nav-link" style={{color:"white", fontWeight:"400"}}>Dashboard</NavLink>
          </Nav>
        </Container>
      </Navbar>
    
    </>)
}