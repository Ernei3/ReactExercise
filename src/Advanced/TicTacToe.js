import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
}

function calculateSquarePosition(square){
  let arrayLegend = [
    "(1 1)", "(2 1)", "(3 1)",
    "(1 2)", "(2 2)", "(3 2)",
    "(1 3)", "(2 3)", "(3 3)",
  ];
  const res = (square !== null) ? arrayLegend[square] : null;

  return res;
}


function Square(props) {

  if(props.res && props.res.includes(props.number)){
    return (
      <Button className="squareWinner" onClick={() => props.onClick() }>
          {props.value}
      </Button>
      );
  }else{
      return (
      <Button className="square" onClick={() => props.onClick() }>
          {props.value}
      </Button>
      );
    }

  }
  
  class Board extends React.Component {

  
    render() {

      let rows = [];

      for (let i = 0; i < 9; i++){
        rows = rows.concat(<Square value={this.props.squares[i]} onClick={ ()=> this.props.onClick(i)} res={this.props.res} number={i} />)
      }

      let board = [];

      for (let i = 0; i < 9; i+=3){
        board = board.concat(
          <Container className="board-row">{rows[i]}{rows[i+1]}{rows[i+2]}</Container>
        );
      }


      return (
        <Container>
          {board}
        </Container>
      );
    }
  }
  
  class TicTacToe extends React.Component {

    constructor(props){
      super(props)
      this.state ={
        history: [{
          squares: Array(9).fill(null),
          lastMove: null,
        }],
        isNext: 'X',
        stepNumber: 0,
        sortMovesFromNewest: false,
      };
    }

    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const newSquares = current.squares.slice();
      if (calculateWinner(newSquares) || newSquares[i]) {
        return;
      }
      newSquares[i] = this.state.isNext;
      this.setState({
        history: history.concat([{
          squares: newSquares,
          lastMove: i,
        }]),
        isNext: this.state.isNext === 'X' ? 'O' : 'X',
        stepNumber: history.length,
        sortMovesFromNewest: this.state.sortMovesFromNewest,
      });
    }

    jumpTo(step){
      this.setState({
        stepNumber: step,
        IsNext: (step % 2) === 0 ? 'X' : 'O',
      });
    }

    handleClickToggle(){
      this.setState({
        history: this.state.history,
        isNext: this.state.isNext,
        stepNumber: this.state.stepNumber,
        sortMovesFromNewest: !(this.state.sortMovesFromNewest),
      });
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const res = calculateWinner(current.squares);
      let winner;
      if (res){
        winner = current.squares[res[0]];
      }

      let moves = history.map((val, move) => {
        let desc;

        if(move){
          desc = 'Go to move #' + move + ': '+calculateSquarePosition(val.lastMove);
        }else{
          desc = 'Go to game start';
        }
        
        
        if(move === this.state.stepNumber){
          return (
            <ListGroupItem key={move}>
              <Button onClick={() => this.jumpTo(move)} className="current-move">{desc}</Button>
            </ListGroupItem>
          );
        }else{
          return (
            <ListGroupItem key={move}>
              <Button onClick={() => this.jumpTo(move)}>{desc}</Button>
            </ListGroupItem>
          );
        }
      });

      if(this.state.sortMovesFromNewest){
        moves = moves.reverse();
      }

      const toggleValue = this.state.sortMovesFromNewest ? "Sort from oldest" : "Sort from newest"

      let status;
      if(winner){
        status = 'Winner: ' + winner;
      }else if(this.state.stepNumber >= 9){
        status = 'Draw';
      }else{
        status = 'Next player: '+ this.state.isNext;
      }

      return (
        <Container className="game">
          <Container className="game-board">
            <Board squares={current.squares} onClick={(i) => this.handleClick(i) } res={res} />
          </Container>
          <Container className="game-info">
            <Container className="status">{status}</Container>
            <Container>
              <Button onClick={() => this.handleClickToggle()}>{toggleValue}</Button>
            </Container>
            <ListGroup>{moves}</ListGroup>
          </Container>
        </Container>
      );
    }
  }

  export default TicTacToe;