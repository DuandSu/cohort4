import React from 'react';

import './TicTacToe.css';

function Square(props) {

  // const squareColor = "green";

    return (
        <button className="square" onClick={props.onClick} style={{color: `${props.squareColor}`}}>
          {props.value}
        </button>
      );
  }
  
  class Board extends React.Component {

    renderSquare(i) {
        
      return (
        <Square 
          value={this.props.squares[i]} 
          onClick={() => this.props.onClick(i)}
          squareColor={this.props.winnerButtons.includes(i)?"green":"black"}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div>1 . 2 . 3</div>
          <div className="board-row">
           .1
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            .2
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            .3
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
          player: null,
          squarePicked: null,
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      // call .slice() to create a copy of the squares array
      const squares = current.squares.slice();
      if (calculateWinner(squares)[0] || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
          player: squares[i],
          squarePicked: i
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    render() {

      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move + ": " + history[move].player + " chose " + cvt2Grid(history[move].squarePicked):
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });      
      
      let status;

      if (winner[0]) {
        status = 'Winner: ' + winner[0];
      } else if (this.state.stepNumber === 9) {
        status = "Tie: Result is a Draw";
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              winnerButtons={winner[1]}
            />
          </div>
          <div className="game-info">
            <div>Suggest Move: {suggestMove(current.squares, (this.state.xIsNext ? 'X' : 'O'),this.state.stepNumber)}</div>
            <div>{status}</div>
              <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
function TicTacToe(props) {

    return (
        <div>
            <div className="AppTicTacToe">
                <p>
                    {props.sMessageArea}
                </p>
                <Game />
            </div>
        </div>
    );
}

function suggestMove (board, player, stepNumber) {

  console.log(player, stepNumber);
  if (player==="X" && stepNumber===0) {
    return (cvt2Grid(0));
  } else if (player==="O" && stepNumber===1) {
    if (board[4] === null)
      return (cvt2Grid(4));
    else return cvt2Grid(0);
  } else if (player==="X" && stepNumber===2) {
    if (board[8] === null)
      return (cvt2Grid(8));
    else return cvt2Grid(2);
  }
  else return "No Suggestion";

}

// function possibleWin(board, player) {

//   let win = false;
//   calcWin = 1;

//   for (let i = 0; i < 3;  i++) {
//     if (board[i] === null)
//       calcValue = 2;
//     else if (board[i] === "X")
//       calcValue = 3;
//     else calcValue = 5;
//     calcWin *= calcValue;
//   }
//   if (player === "X")
// }

function calculateWinner(squares) {
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
      return [squares[a], lines[i]];
    }
  }

  return [null, [-1, -1, -1]];
}

function cvt2Grid(index) {

  const gridMap = [
    {row: 1, col: 1},
    {row: 1, col: 2},
    {row: 1, col: 3},
    {row: 2, col: 1},
    {row: 2, col: 2},
    {row: 2, col: 3},
    {row: 3, col: 1},
    {row: 3, col: 2},
    {row: 3, col: 3},
  ]
  return `R: ${gridMap[index].row} C: ${gridMap[index].col}`
}

export default TicTacToe;
