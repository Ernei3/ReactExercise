import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';


export default function Tick() {
    
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      var timerID = setInterval( () => {setTime(new Date().toLocaleTimeString())}, 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });

    return(
      <Container fluid="md" className="tick">
        It is {time}.
      </Container>
    )
  }
  
