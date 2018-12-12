// Model
var diffOpt = ["easy peasy", "not that simple", "hmm", "wow dude slow down"];


// Controller

function renderDif(x) {
  x.forEach(function(element) {
    var newDif = document.createElement("li");
    newDif.innerHTML = element;
    var wtf = document.getElementById("listDif")
    wtf.appendChild(newDif);
  });
};


// Difficulty View
renderDif(diffOpt);

//  Game panel View
