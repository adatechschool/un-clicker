var bouton = document.getElementById("attac");
var showDollars = document.getElementById("dollar");
var showHope = document.getElementById("hope");

var upgrade = [
  {
    name: "Enceinte",
    description: "Une enceinte pour emmerder les vieilles dans le métro.",
    niveau: 50
  },
  {
    name: "Lycéen",
    description: "Un jeune mal dans sa peau aisément manipulable.",
    niveau: 70
  },
];

var currentValue = 10e5;
var hope = 0;

showHope.innerText = hope;
showDollars.innerText = currentValue;
bouton.addEventListener("click", attac, false);
bouton.addEventListener("click", espoir, false);


function attac(event) 
{
  currentValue = currentValue - 5;
  showDollars.innerHTML = currentValue;
}

setInterval("stackmoney()", 300);

function stackmoney() 
{ 
  showDollars.innerText = currentValue++;
}

function espoir() 
{
  showHope.innerText = hope++;
}
