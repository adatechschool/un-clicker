let bouton = document.getElementById("attac");
let showDollars = document.getElementById("dollar");
let showHope = document.getElementById("hope");
let actions = document.getElementById("actions");
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
  currentValue++;
  showDollars.innerText = currentValue;
}

function espoir() 
{
  hope++;
  showHope.innerText = hope;
  if (hope == 15)
    new SkillGetter("boombox", "Une boombox pour faire raler les mamies du 7eme", 1);
  if (hope == 30)
    new SkillGetter("lyceen", "Un lycéen naïf et stupide, la recrue parfaite", 2);
}
