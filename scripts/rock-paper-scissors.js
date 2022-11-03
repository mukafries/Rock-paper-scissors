let hands =["rock", "paper", "scissors"];
const timer = ms => new Promise(res => setTimeout(res,ms));
let isStarted = false;

const playerOne = {
  'id' : 1,
  'name' : '',
  'img' : '',
  'hand' : '',
  'score' : 0
};

const playerTwo = {
  'id' : 2,
  'name' : '',
  'img' : '',
  'hand' : '',
  'score' : 0
};

//image paths
const rockPath = "images/rock2 sized-300.jpg";
const paperPath = "images/paper2 sized-300.jpg";
const scissorPath = "images/scissors3 left-300.jpg";

// element
const simulate_btn = document.querySelector("#simulate-btn");
const message_El = document.getElementById("message");
const winner_El = document.getElementById("winner");
playerOne.img = document.querySelector("#player1-img");
playerTwo.img = document.querySelector("#player2-img");
playerOne.name = document.querySelector("#player-1-name");
playerTwo.name = document.querySelector("#player-2-name");

//playerhands
// let playerOneHand ="none";
// let playerTwoHand ="none";


// handTime();
simulate_btn.addEventListener("click", () => console.log(simulate()));



async function simulateHandAndImage(){
  winner_El.textContent = "";
  message_El.textContent = "Simulating...";
  for (let i = 0; i <50; i++) {
    playerOne.hand = renderHand(playerOne.img);
    playerTwo.hand = renderHand(playerTwo.img);
    await timer(100);
  }
  message_El.textContent ="finished";
  console.log(playerOne.hand+" X "+ playerTwo.hand);
  let winner = checkWin(playerOne, playerTwo);
  
  if (winner !== 'Draw') {
    winner_El.textContent = winner.name.value+" wins";
    winner_El.innerHTML
    increaseScore(winner); 
  }else{
    winner_El.innerHTML= "It is a "+winner+"<br> Simulate again";
    console.log(winner);
  }
  isStarted = false;
}


function simulate(){
  if (checkNameValid(playerOne) === false || checkNameValid(playerTwo) === false) {
    return false;
  }
  if(isStarted){
    console.log("wait for end of simulation")
    return false;
  }
  isStarted = true;
  simulateHandAndImage();
  return true;
}

function getHand(){
  let random = Math.floor(Math.random() * 3);
  return (hands[random]);
}

function renderHand(playerImg){
  let playerHand = getHand();
  if(playerHand ==="scissors"){
    playerImg.src = scissorPath;
  }
  else if(playerHand === "rock")
  {
    playerImg.src = rockPath;
  }else if(playerHand === "paper")
  {
    playerImg.src = paperPath;
  }
  return playerHand;
}

function checkWin(playerOne, playerTwo){
  if(playerOne.hand === playerTwo.hand){
    return "Draw"
  }
  if(playerOne.hand === "rock"){
    if(playerTwo.hand === "paper"){
      return playerTwo;
    }else{
      return playerOne;
    }
  }

  if(playerOne.hand === "paper"){
    if(playerTwo.hand === "rock"){
      return playerOne;
    }else{
      return playerTwo;
    }
  }

  if(playerOne.hand === "scissors"){
    if(playerTwo.hand === "paper"){
      return playerOne;
    }else{
      return playerTwo;
    }
  }
}

function checkNameValid(player){
  if(player.name.disabled === true){
    return true;
  }
  winner_El.textContent = "set player "+player.id+" name";
  return false;
}

function increaseScore(player){
  player.score += 1;
}