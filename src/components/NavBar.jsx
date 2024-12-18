import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from "./CartWidget"
import { Link, NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <div>
          <Navbar bg="light" data-bs-theme="light" className="fixed-top">
          <Container>
            <Navbar.Brand as={Link} to='/'>Wish Market</Navbar.Brand>
            <Nav className="me-auto d-flex align-items-center">
              
              <NavLink
                to="/category/zapatillas"
                style={({ isActive }) =>
                  isActive ? {color: "pink", textDecoration: "none" } : { color: "black", textDecoration: "none" }
                }
                 className="me-3"
              >
                Zapatillas
              </NavLink>
              <NavLink
                to="/category/ropa"
                style={({ isActive }) =>
                  isActive ? {color: "green", textDecoration: "none" } : { color: "black", textDecoration: "none" }
                }
                 className="me-3"
              >
                Ropa
              </NavLink>
              <NavLink
                to="/category/accesorios"
                style={({ isActive }) =>
                  isActive ? {color: "purple", textDecoration: "none" } : { color: "black", textDecoration: "none" }
                }
              >
                Accesorios
              </NavLink>

            </Nav>
            <CartWidget />
          </Container>
        </Navbar>
      </div>   
    );
}

export default NavBar