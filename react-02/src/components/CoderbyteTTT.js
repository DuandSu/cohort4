import React from 'react';
// import React, { useState } from 'react';
//import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'black'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square(props) {
  return (
      <div onClick={props.onClick}
        className="square"
        style={squareStyle}>{props.value}
      </div>
    );
}

class Board extends React.Component {

  renderSquare(i) {
    return(
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onSquareClick(i)}
      />
    )
  }

  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div 
          className="status" 
          style={instructionsStyle}>
            Next player: 
              {this.props.winStatus === "None" 
                ? this.props.player 
                : " Game is Over"}
        </div>
        <div className="winner" style={instructionsStyle}>Winner: {this.props.winStatus}</div>
        <button 
          style={buttonStyle}
          onClick={() => this.props.onResetClick()}
          >Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row" style={rowStyle}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row" style={rowStyle}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleSquareClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    console.log("In handleSquareClick: squares[" + i + "] is " + squares[i]);
    console.log("In handleSquareClick: calculate winner is " + calculateWinner(squares));

    // if (calculateWinner(squares) || squares[i])
    if (calculateWinner(squares))
      return;
    
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  handleResetClick() {
    const squares = Array(9).fill(null);
    this.setState({
      squares: squares,
      xIsNext: true,
    })
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let winStatus;

    if (winner)
      winStatus = winner;
    else 
      winStatus = "None";

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={this.state.squares}
            player={this.state.xIsNext ? 'X' : 'O'}
            winStatus={winStatus}
            onSquareClick={(i) => this.handleSquareClick(i)}
            onResetClick={() => this.handleResetClick()}
          />
        </div>
      </div>
    );
  }
}

function CoderbyteTTT(props) {

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

function calculateWinner (squares) {
  const lines  = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default CoderbyteTTT;