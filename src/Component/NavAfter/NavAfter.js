import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../Logo.png';
import { UserContext } from '../../App';
import './NavAfter.css';

const NavAfter = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div >
            <Navbar expand="lg" style = {{marginLeft:"25%"}}>
                <Navbar.Brand><img style={{ marginTop: "20px",height: "60px",width: "120px" }} className="logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto navbar">
                        <ul>
                            <li> <Link to = "/home">Home</Link> </li>
                            <li> <Link to = "/home">Destination</Link> </li>
                            <li> <Link to = "/home">Blog</Link> </li>
                            <li> <Link to = "/home">Contact</Link> </li>
                            <li>
                            {
                                loggedInUser.name ? <Button style={{ backgroundColor: "#F9A51A", border: "none"}}> {loggedInUser.name} </Button> :
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

export default NavAfter;