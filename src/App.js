import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    useHistory
} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Search from './Components/Search';
import helloWorld from './Exercises/helloWorld';





function App() {

  
  
  
  return (
    <Router>
      <Container fluid="lg" className="navigation">
        
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Exercises" id="basic-nav-dropdown">
              <NavDropdown.Item href="/helloWorld">Hello World</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Search />
        </Navbar>
        
        
        <Route path="/helloWorld" component={helloWorld}/>
      </Container>
    </Router>
  );
}

export default App;
