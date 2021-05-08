import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useAuth } from "./../util/auth.js";

function NavbarCustom(props) {
  const auth = useAuth();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">
            <LinkContainer to="/about">
              <Nav.Link active={false}>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/pricing">
              <Nav.Link active={false}>Pricing</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/faq">
              <Nav.Link active={false}>FAQ</Nav.Link>
            </LinkContainer>

            {!auth.user && (
              <LinkContainer to="/auth/signin">
                <Nav.Link active={false}>Sign in</Nav.Link>
              </LinkContainer>
            )}

            {auth.user && (
              <NavDropdown id="dropdown" title="Account" alignRight={true}>
                <LinkContainer to="/dashboard">
                  <NavDropdown.Item active={false}>Dashboard</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/settings/general">
                  <NavDropdown.Item active={false}>Settings</NavDropdown.Item>
                </LinkContainer>

                <Dropdown.Divider />

                <LinkContainer to="/auth/signout">
                  <NavDropdown.Item
                    active={false}
                    onClick={(e) => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>

          {!auth.user && (
            <LinkContainer to="/auth/signup">
              <Button variant="primary">Sign Up</Button>
            </LinkContainer>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
