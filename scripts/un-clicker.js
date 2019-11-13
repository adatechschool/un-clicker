var evilValue = 10e5
var currentValue = evilValue
var affichage = document.getElementById("dollar")
var power = 0
var start = Date.now()

function init() {
  var bouton = document.getElementById("attac")
  bouton.onclick = attac
}

function attac(event, power) {
  var time = Date.now()
  var seconds = parseInt((time - start)/1000)
  power = 5
  affichage.removeChild(affichage.childNodes[0])
  var newdiv=document.createElement('div')
  currentValue = currentValue - power
  newdiv.textContent = currentValue+"\n"+seconds
  affichage.appendChild(newdiv) 
}