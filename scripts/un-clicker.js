var evilValue = 10e5
var currentValue = evilValue
var affichage = document.getElementById("dollar")
var showhope = document.getElementById("hope")
var power = 0
var start = Date.now()
var step = start

function init() 
{
  var bouton = document.getElementById("attac")
  var bouton2 = document.getElementById("attac")
  bouton2.onclick = espoir
  bouton.onclick = attac
}

var hope = 0

function attac(event, power) 
{
  var time = Date.now()
  var seconds = parseInt((time-step)/1000)
  affichage.removeChild(affichage.childNodes[0])
  power = 5
  var newdiv=document.createElement('div')
  currentValue = currentValue + seconds
  currentValue = currentValue - power
  newdiv.textContent = currentValue
  affichage.appendChild(newdiv)
  step = time
}

function stackmoney() 
{ 
  affichage.removeChild(affichage.childNodes[0])
  var newdiv=document.createElement('div')
  currentValue++
  newdiv.textContent = currentValue
  affichage.appendChild(newdiv)
}

function refresh()
{
    var refresh = setInterval(stackmoney(), 1000)
}

refresh();

function espoir(event) 
{
    hope++
    var newhope = document.createElement('div')
    showhope.removeChild(showhope.childNodes[0])
    newhope.textContent = hope
    showhope.appendChild(newhope)
}
