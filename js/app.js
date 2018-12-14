// Model
var diffOpt = ["easy peasy", "not that simple", "wow dude slow down"];
var currentDif = "easy peasy";
var numberToGuess = 5;
var min=1;
var max=100;

// Controller


// difficulty panel

// when difficulty gets selected: 1-panel should render to game diff; 2-display on sidenav should show actual level
// add event listener to drop btn to renders
function renderDif(array) {
  return array.forEach(function(element) {
    var newDif = document.createElement("li");
    newDif.id = element;
    newDif.innerHTML = element;
    newDif.addEventListener("click", function() {
      difSelected(newDif, array);
      renderDifGame(newDif);
    });
    document.getElementById("myDropdown").appendChild(newDif);
  })
};

// get the dificulty selected on the diffuculty panel
function difSelected(level,array) {
  array.forEach(function(element) {
    var loopDif = document.getElementById(element)
    var compTwo = level.id;
    if (compTwo === element) {
      loopDif.classList.add("selected")
    } else {
      loopDif.classList.remove("selected");
    }
  })
};


// get the game render according to difficulty selected
function renderDifGame(newDif){
currentDif = newDif;
renderGame();
};

// game panel

function renderGame() {
 const currentDi = document.querySelector(".selected").innerHTML;
  if (currentDi === "easy peasy"){
    max=10;
    min=1;
    return numberToGuess=Math.round((Math.random()*((max-min)+1))+min);
      }
  else if (currentDi === "not that simple"){
    max=100;
    min=1;
    return numberToGuess=Math.round((Math.random()*((max-min)+1))+min);
  }
  else if (currentDi === "wow dude slow down"){
    max=1000;
    min=1;
    return numberToGuess=Math.round((Math.random()*((max-min)+1))+min);
  }
};

// check guess!
function initializeGame(){
  var buttonGuess = document.getElementById("guessBtn");
  buttonGuess.addEventListener("click",function(inpNum){
    if (inpNum===numberToGuess){
      console.log("you've guessed it man!");
    }
    else if (inpNum>numberToGuess){
      console.log("Higher!");
    }
    else {
      console.log("lower!");
    }
  })
};


// Difficulty View
renderDif(diffOpt);
//  Game panel View
initializeGame();
