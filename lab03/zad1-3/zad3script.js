let btn1 = document.getElementById("buttonAddItem");

var items = 2;

btn1.onclick = function() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document. createTextNode("list item " + items));
    li.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);;
    ul.appendChild(li);
    items += 1;

}

let btn2 = document.getElementById("buttonDelItem")

btn2.onclick = function() {
    var ul = document.getElementById("list");
    items -= 1;
    if(items < 1) items = 1;
    ul.removeChild(ul.childNodes[0]);
}