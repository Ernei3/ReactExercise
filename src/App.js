import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import helloWorld from './Pages/helloWorld';


function App() {
  return (
    <Router>
      <div className="content">
        <div className="menu">
            <nav>
            <Link to="/helloWorld"><Button>HelloWorld</Button></Link>
            </nav>
        </div>
        <Route path="/helloWorld" component={helloWorld}/>
      </div>
    </Router>
  );
}

export default App;
