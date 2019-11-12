var evilValue = 10e5

document.write(evilValue)

function init() {
  var bouton = document.getElementById("attac")
  bouton.onclick = attac
}

function attac(event) {
  alert("coucou les gens")
}
