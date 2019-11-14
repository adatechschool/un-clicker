var currentValue = 10e5
var showDollars = document.getElementById("dollar")
var showHope = document.getElementById("hope")
var hope = 0
showHope.innerHTML = hope
showDollars.innerHTML = currentValue

var bouton = document.getElementById("attac")
bouton.addEventListener("click", attac, false)
bouton.addEventListener("click", espoir, false)

function attac(event) 
{
  currentValue = currentValue - 5
  showDollars.innerHTML = currentValue
}

setInterval("stackmoney()", 300)

function stackmoney() 
{ 
  showDollars.style.fontSize = "40px"
  showDollars.innerHTML = currentValue++
}

function espoir(event) 
{
  showHope.innerHTML = hope++
}
