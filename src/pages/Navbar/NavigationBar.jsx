import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);
  console.log(user.displayName);
  const handleLogOut=()=>[
    logOut()
    .then()
    .catch(error=>console.log(error))
  ]
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Foodies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Home</Nav.Link> */}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "15px",
                }}
              >
                Home
              </Link>
              {/* <Nav.Link href="#pricing">BLog</Nav.Link> */}
              <Link
                to="/blog"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "15px",
                }}
              >
                Blog
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user ?
                <Button onClick={handleLogOut} variant="secondary">Logout</Button>:
                <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
                }
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
