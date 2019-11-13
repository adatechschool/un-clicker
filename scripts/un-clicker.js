var evilValue = 10e5
var currentValue = evilValue
var affichage = document.getElementById("dollar")
var power = 0
var start = Date.now()
var step = start

function init() 
{
  var bouton = document.getElementById("attac")
  bouton.onclick = attac
}

var espoir = 0
function attac(event, power) 
{
  var time = Date.now()
  var seconds = parseInt((time-step)/1000)
  affichage.removeChild(affichage.childNodes[0])
  espoir++
  power = 5
  var newdiv=document.createElement('div')
  currentValue = currentValue + seconds
  currentValue = currentValue - power
  newdiv.textContent = currentValue
  affichage.appendChild(newdiv)
  step = time
}

function espoir(event) 
{
    var showhope = document.getElementById("hope")
    var newhope = document.createElement('div')
    showhope.removeChild(showhope.childNodes[0])
    newhope.textContent = espoir
    showhope.appendChild(newhope)
}



