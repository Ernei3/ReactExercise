import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Square(props) {

    const [value, setValue] = useState(null);

    return (
    <Button className="square" onClick={() => setValue('X') }>
        {value}
    </Button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <Container>
          <Container className="status">{status}</Container>
          <Container className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </Container>
          <Container className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </Container>
          <Container className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </Container>
        </Container>
      );
    }
  }
  
  class TicTacToe extends React.Component {
    render() {
      return (
        <Container className="game">
          <Container className="game-board">
            <Board />
          </Container>
          <Container className="game-info">
            <Container>{/* status */}</Container>
            {/* TODO */}
          </Container>
        </Container>
      );
    }
  }

  export default TicTacToe;