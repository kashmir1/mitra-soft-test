import React, {useState} from 'react';
import './App.css';
import {Button, Card, Container, Navbar, NavDropdown} from 'react-bootstrap';
import Navigation from "../Navigation/Navigation";
import GalleryList from "../Gallery-list/Gallery-list";

function App() {

    return (
    <div className="App">
        <Navigation />
        <GalleryList />
    </div>
  );
}

export default App;
