import React, { useContext } from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import logo from '../../Logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const NavBefore = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand><img style={{ marginTop: "20px", height: "60px",width: "120px",filter: "brightness(600%)" }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <input style={{ background: "rgba(255, 255, 255, 0.2)", border: "1px solid #FFFFFF", borderRadius: "5px", width: "250px" }} type="text" placeholder="search your destination" />

                    <Nav className="mr-auto nav-before">
                        <ul>
                            <li> <Link to = "/home">Home</Link> </li>
                            <li> <Link to = "/home">Destination</Link> </li>
                            <li> <Link to = "/home">Blog</Link> </li>
                            <li> <Link to = "/home">Contact</Link> </li>
                            <li>
                            {
                                loggedInUser.name ? <Button style={{ backgroundColor: "#F9A51A",border: "none"}}> {loggedInUser.name} </Button> :
                                <Link to="/login"> <Button style={{ backgroundColor: "#F9A51A", width: "120px", border: "none", borderRadius: "5px" }}>Log in</Button> </Link>    
                            }
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default NavBefore;