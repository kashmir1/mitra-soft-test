import React, {useState} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import styles from './Navbar.module.css'
import set = Reflect.set;

function Navigation(): JSX.Element {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <React.Fragment>
            <div className='container'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Галерея</Navbar.Brand>
                        <button onClick={menuToggle}>Открыть меню</button>
                    </Container>
                </Navbar>
            </div>
        </React.Fragment>
    )
}

export default Navigation;
