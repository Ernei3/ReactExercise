import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class CountButtonClass extends React.Component {

    constructor(props) {
        
        super(props);
        
        this.state = {
            count: 0
        };

    }

    render() {
        return (
            <Container>
            <Button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</Button>
        </Container>
        );
      }

}

function CountButtonHook() {

    const [count, setCount] = useState(0);

    return(
        <Container>
            <Button onClick={() => setCount(count+1)}>{count}</Button>
        </Container>
        
    );

}

function CountButtons() {

    return(
        <Container>
            React Class Button:
            <CountButtonClass></CountButtonClass>
            React Hook Button:
            <CountButtonHook></CountButtonHook>
        </Container>
    );


}


export default CountButtons;