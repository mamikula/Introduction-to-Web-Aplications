let btn = document.getElementById("button")

btn.onclick = function() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("text").innerHTML =
    "Hello " + person;
  }
}
