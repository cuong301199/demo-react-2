import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className="navbar-brand" to={"/"}>
          React-Bootstrap
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to={"/"}>
              Home
            </NavLink>
            <NavLink className="nav-link" to={"/users"}>
              Users
            </NavLink>
            <NavLink className="nav-link" to={"/admins"}>
              Admin
            </NavLink>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/admins">Admin</Nav.Link> */}
          </Nav>
          <NavDropdown title="Setting" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
