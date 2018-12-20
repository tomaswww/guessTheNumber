// Model
var diffOpt = ["easy peasy", "not that simple", "wow dude slow down"];
var currentDif = "easy peasy";
var min;
var max;
var inpNum;
var numberToGuess;


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
function difSelected(level, array) {
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
function renderDifGame(newDif) {
  currentDif = newDif;
  renderGame();
};

// game panel

function renderGame() {
  const currentDi = document.querySelector(".selected").innerHTML;
    if (currentDi === "easy peasy") {
    max = 10;
    min = 1;
    return numberToGuess = Math.round((Math.random() * ((max - min) + 1)) + min);
  } else if (currentDi === "not that simple") {
    max = 100;
    min = 1;
    return numberToGuess = Math.round((Math.random() * ((max - min) + 1)) + min);
  } else if (currentDi === "wow dude slow down") {
    max = 1000;
    min = 1;
    return numberToGuess = Math.round((Math.random() * ((max - min) + 1)) + min);
  }
};

// check guess!
 function checkWin(inpNum) {
  var insertNum = request.getParameter("inpNum");
   var luckyNum= inpNum;
    if (luckyNum === numberToGuess) {
      console.log("you've guessed it man!");
    } else if (luckyNum > numberToGuess) {
      console.log("lower!");
    } else if (luckyNum < numberToGuess) {
      console.log("higher!");
    } else {
      console.log("soms wrong dude...");
    }
  };

// game board for nums tried
function numTried(arrayOfTries){
// must define array and get nums once entered in this arrayOfTries!
var gameBoardDisplay = document.getElementById("numTried");
gameBoardDisplay.innerHTML = ("You've already tried: "+arrayOfTries.toString());
}


// game board for attempts
function attTried(arrayOfTries){
// must define array and get nums once entered in this arrayOfTries!
var gameBoardAtt = document.getElementById("numAttempts");
gameBoardAtt.innerHTML = ("You've already tried: "+arrayOfTries.lenght()+" times.");
// after i get this working with an if I must correct the 1 times syntax error
}




// Difficulty View
renderDif(diffOpt);
//  Game panel View
