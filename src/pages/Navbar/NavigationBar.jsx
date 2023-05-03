import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => [
    logOut()
      .then()
      .catch((error) => console.log(error)),
  ];
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Foodies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "me-3 fw-semibold fs-5 text-decoration-none text-success"
                    : "me-3 fw-semibold fs-5 text-decoration-none text-dark"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "me-3 fw-semibold fs-5 text-decoration-none text-success"
                    : "me-3 fw-semibold fs-5 text-decoration-none text-dark"
                }
              >
                Blog
              </NavLink>
            </Nav>
            <Nav>
              {user && <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{user.displayName ? user.displayName : 'No Username Found'}</Tooltip>}>
                                <span className="d-inline-block">
                                    {
                                        user?.photoURL ? <img style={{ width: '50px', marginRight:"15px", borderRadius: '50%' }} src={user.photoURL} alt="" /> : <FaUserCircle style={{ fontSize: '30px' }}></FaUserCircle>
                                    }
                                </span>
                            </OverlayTrigger>}
              
                {user ? (
                  <Button onClick={handleLogOut} variant="secondary">
                    Logout
                  </Button>
                  
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
               {/* {user && <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={user?.photoURL} alt="" />} */}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  );
};

export default NavigationBar;
