import React from 'react';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Search(){

    let history = useHistory();
    
    function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      history.push('/'+data.get('searchedText').toString().replace(/ /g,''));
    }
  
    return(
      <Form inline onSubmit={handleSubmit}>
        <FormGroup role="form">
          <FormControl type="text" name="searchedText" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light" type="submit">Search</Button>
        </FormGroup>
      </Form>
    )
  
  }