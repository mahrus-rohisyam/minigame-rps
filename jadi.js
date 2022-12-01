const scoreBoard = document.getElementById("score-board");
const userLabel = document.getElementById("user-label");
const computerLabel = document.getElementById("computer-label");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const result = document.getElementById("result");
const game = document.getElementById("game");
const choice = document.getElementsByClassName("choice");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
let scoreOfUser = 0;
let scoreOfComputer = 0;

class Game {
  constructor() {
    this.result = "";
    this.choice = "";
    this.userChoice = "";
    this.computerChoice = "";
  }

  convertLetter(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissor";
  }

  botChoice() {
    const options = ["r", "p", "s"];
    this.computerChoice = options[Math.floor(Math.random() * 3)]; // Nilainya akan menjadi 0, 1, 2 || r, p, s
    return this.computerChoice;
  }

  scoring() {
    // rs
    this.choice = this.userChoice + this.computerChoice;
    // Choice nilainya PR
    switch (this.choice) {
      case "pr":
      case "sp":
      case "rs":
        this.userWin();
        break;
      case "rp":
      case "ps":
      case "sr":
        this.userLose();
        break;
      case "rr":
      case "ss":
      case "pp":
        this.draw();
        break;
    }
  }

  userWin() {
    result.innerHTML = `${this.convertLetter(this.userChoice)} against ${this.convertLetter(this.computerChoice)}, User Win`;
    scoreOfUser++;
    userScore.innerHTML = scoreOfUser;
  }

  userLose() {
    result.innerHTML = `${this.convertLetter(this.userChoice)} against ${this.convertLetter(this.computerChoice)}, Computer Win`;
    scoreOfComputer++;
    computerScore.innerHTML = scoreOfComputer;
  }

  draw() {
    `${this.convertLetter(this.userChoice)} against ${this.convertLetter(this.computerChoice)}, It's Draw!`;
  }

  resetGame() {
    result.innerHTML = "Could you beat the computer?";
    scoreOfUser = 0;
    scoreOfComputer = 0;
    userScore.innerHTML = scoreOfUser;
    computerScore.innerHTML = scoreOfComputer;
  }
}


const play = (userChoice) => {
  let main = new Game();
  main.userChoice = userChoice;
  main.botChoice();
  main.scoring();
};


const resetGame = () => {
  let game = new Game();
  game.resetGame();
};
