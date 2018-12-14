// Model
var diffOpt = ["easy peasy", "not that simple", "wow dude slow down"];


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
      renderGame(newDif);
    });
    document.getElementById("myDropdown").appendChild(newDif);
  })
}

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


// game panel




// Difficulty View
renderDif(diffOpt);
//  Game panel View
