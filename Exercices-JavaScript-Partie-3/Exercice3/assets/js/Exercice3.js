//Création de 4 variables
var g = document.getElementsByClass("green");
var r = document.getElementsByClass("red");
var b = document.getElementsByClass("blue");
var text = document.getElementById("text");

//On selectionne le premier élément de la class et on lui applique une fonction
g[0].addEventListener("click", green);
r[0].addEventListener("click", red);
b[0].addEventListener("click", blue);

//Fonction green
function green() {
  text.style.color = "green";
};

//Fonction red
function red() {
  text.style.color = "red";
};

//Fonction blue
function blue() {
  text.style.color = "blue";
};
