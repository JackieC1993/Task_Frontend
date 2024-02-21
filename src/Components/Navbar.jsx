import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuthDataProvider from "../Provider/AuthProvider";

//Carlos' code
/* const NavBar = ({ user, setUser, setToken }) => {
    const handleLogOut = () => {
        setUser(null)
        setToken(null)
    }
*/
//Destiny's Provider code
const NavBar = () => {
  const { setToken, setUser, user } = useAuthDataProvider();

  const handleLogOut = () => {
    setUser(null);
    setToken(null);
  };
  //use useEffect change to the state of the 'user'
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            {" "}
            Task Manager
          </Nav.Link>
        </Navbar.Brand>
        {!user ? (
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Login">
              {" "}
              Log in
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              {" "}
              Sign up
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/tasks">
              {" "}
              {user.username}
            </Nav.Link>
            <Button
              variant="outline-light"
              style={{ color: "black" }}
              onClick={handleLogOut}
              size="sm"
            >
              Log out{" "}
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
