import React, {useState} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './navigation.css'
import set = Reflect.set;

function Navigation(): JSX.Element {

    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState<Boolean>(false)

    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <React.Fragment>
            <div className="container">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <div className="row">
                            <div className='col-lg-6 position-relative'>
                              <div className={!isMenuOpen ? 'toggle-open' : 'toggle-close'} onClick={menuToggle}></div>
                            </div>

                            <div className='col-lg-6'><Navbar.Brand href="#home">Галерея</Navbar.Brand></div>
                        </div>
                        <nav>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink activeClassName='nav-active' to="/profile">Profile</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </Container>
                </Navbar>
            </div>
        </React.Fragment>
    )
}

export default Navigation;
