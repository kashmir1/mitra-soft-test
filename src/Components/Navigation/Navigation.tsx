import React, {useState} from "react";
import {Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './navigation.css'

function Navigation(): JSX.Element {

    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

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
                        <nav className={!isMenuOpen ? 'd-none' : 'd-block'}>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink className={({isActive}) => (isActive ? 'active' : '')} to="/">Галерея</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({isActive}) => (isActive ? 'active' : '')} to="/about">Обо мне</NavLink>
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
