let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
let currentPlayer = 1;
let gameOver = false;
let isDraw = false;

function setup() {
  createCanvas(600, 600);
  resetBoard();
}

function draw() {
  background(255);
  drawBoard();
  if (gameOver) {
    fill(255, 0, 0); // Rojo
    textSize(32);
    textAlign(CENTER, CENTER);
    if (isDraw) {
      text("Empate", width / 2, height - 50);
    } else {
      text("Jugador " + currentPlayer + " gana", width / 2, height - 50);
    }
    text("Haz clic para reiniciar", width / 2, height - 20);
  }
}

function mousePressed() {
  if (gameOver) {
    resetBoard();
  } else {
    let row = floor(mouseY / (height / 3));
    let col = floor(mouseX / (width / 3));
    if (board[row][col] == 0) {
      board[row][col] = currentPlayer;
      if (checkWin()) {
        gameOver = true;
      } else if (checkDraw()) {
        gameOver = true;
        isDraw = true;
      } else {
        currentPlayer = 3 - currentPlayer; // Cambia entre 1 y 2
      }
    }
  }
}

function drawBoard() {
  stroke(0);
  strokeWeight(4);
  noFill(); // No rellenar el círculo
  for (let i = 1; i < 3; i++) {
    line(0, i * height / 3, width, i * height / 3);
    line(i * width / 3, 0, i * width / 3, height);
  }
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] == 1) {
        drawX(col * width / 3, row * height / 3);
      } else if (board[row][col] == 2) {
        drawO(col * width / 3, row * height / 3);
      }
    }
  }
}

function drawX(x, y) {
  line(x + 20, y + 20, x + width / 3 - 20, y + height / 3 - 20);
  line(x + width / 3 - 20, y + 20, x + 20, y + height / 3 - 20);
}

function drawO(x, y) {
  ellipse(x + width / 6, y + height / 6, width / 3 - 40, height / 3 - 40);
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] == currentPlayer && board[i][1] == currentPlayer && board[i][2] == currentPlayer) {
      return true;
    }
    if (board[0][i] == currentPlayer && board[1][i] == currentPlayer && board[2][i] == currentPlayer) {
      return true;
    }
  }
  if (board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) {
    return true;
  }
  if (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer) {
    return true;
  }
  return false;
}

function checkDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] == 0) {
        return false;
      }
    }
  }
  return true;
}

function resetBoard() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      board[row][col] = 0;
    }
  }
  currentPlayer = 1;
  gameOver = false;
  isDraw = false;
}
