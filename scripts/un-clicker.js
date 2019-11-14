let bouton = document.getElementById("attac");
let showDollars = document.getElementById("dollar");
let showHope = document.getElementById("hope");
let actions = document.getElementById("actions");
let upgrade = [
  {
    name: "Enceinte",
    description: "Une enceinte pour emmerder les vieilles dans le métro.",
    level: 50
  },
  {
    name: "Lycéen",
    description: "Un jeune mal dans sa peau aisément manipulable.",
    level: 70
  },
];

let currentValue = 10e5;
let hope = 0;

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
  if (hope == 15)
    enceinte();
}

function enceinte()
{
  let newdiv = document.createElement('div')
    newdiv.innerText = "Récupérer une enceinte pour faire chier les vieilles du 7eme" 
    newdiv.classList.add("boutonAction")
    actions.appendChild(newdiv)
}
