import { INITIAL_GAME_BOARD } from "../constants/game-board.js";
import { WINNING_COMBINATIONS } from "../constants/winning-combinations.js";

export function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

export function deriveGameBoard(gameTurns) {
  let gameBoard = INITIAL_GAME_BOARD.map(array => [...array]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

export function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const first = gameBoard[combination[0].row][combination[0].column];
    const second = gameBoard[combination[1].row][combination[1].column];
    const third = gameBoard[combination[2].row][combination[2].column];

    if (first && first === second && first === third) {
      winner = players[first];
    }
  }

  return winner;
}
