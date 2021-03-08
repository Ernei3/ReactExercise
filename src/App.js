import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Search from './Components/Search';
import HelloWorld from './Exercises/HelloWorld';
import TicTacToe from './Advanced/TicTacToe';
import Tick from './Exercises/Tick';
import CountButtons from './Exercises/CountButtons';




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
              <NavDropdown.Item href="/tick">Tick</NavDropdown.Item>
              <NavDropdown.Item href="/countButtons">Counting Buttons</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Advanced" id="basic-nav-dropdown">
              <NavDropdown.Item href="ticTacToe">Tic Tac Toe</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Search />
        </Navbar>
        
        
        <Route path="/helloWorld" component={HelloWorld}/>
        <Route path="/ticTacToe" component={TicTacToe}/>
        <Route path="/tick" component={Tick}/>
        <Route path="/countButtons" component={CountButtons}/>
      </Container>
    </Router>
  );
}

export default App;
