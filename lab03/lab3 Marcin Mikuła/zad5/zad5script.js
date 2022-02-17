
var counter = document.getElementById("counter");
var sum = 0;
var ul = document.getElementById("list");

let child = document.getElementById("child");
let par = document.getElementById("par");
let gpar = document.getElementById("gpar");
let btn = document.querySelector("#pbut");


var flag = false;

child.addEventListener("click", yellow);
par.addEventListener("click", red);
gpar.addEventListener("click", blue);

function add(num) {
    sum += num;
    counter.innerHTML = sum
}

function clear(ul) {
    while (ul.firstChild)
        ul.removeChild(ul.firstChild);
}

function yellow(e) {
    if (flag) { flag = false; clear(ul); }

    if (btn.textContent === "Start Propagation") {
        e.stopImmediatePropagation("click", yellow);
        clear(ul);
        flag = true;
    }
    if (sum >= 29) {
        par.style.backgroundColor = "grey";
        par.removeEventListener("click", red);
    }
    if (sum >= 49) {
        child.style.backgroundColor = "grey";
        child.removeEventListener("click", yellow);
        par.removeEventListener("click", red);
    }

    add(5);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("nacisnąłeś żółty o wartości 5"));
    ul.appendChild(li);
}


function blue(e) {
    if (btn.textContent === "Start Propagation") {
        e.stopImmediatePropagation("click", blue);
        clear(ul);
        flag = true;
    }

    if (flag) { flag = false; clear(ul); }
    flag = true;

    if (sum >= 29) {
        par.style.backgroundColor = "grey";
        par.removeEventListener("click", red);
    }
    if (sum >= 49) {
        child.removeEventListener("click", yellow);
        child.style.backgroundColor = "grey";

    }
    if (sum >= 59) {
        gpar.style.backgroundColor = "grey";
        gpar.removeEventListener("click", blue);
    }

    add(1);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("nacisnąłeś niebieski o wartości 1"));
    ul.appendChild(li);
    // clear(ul)
}


function red(e) {
    if (flag) { flag = false; clear(ul); }

    if (btn.textContent === "Start Propagation") {
        e.stopImmediatePropagation("click", red);
        clear(ul);
        flag = true;
    }
    if (sum >= 29) {
        par.style.backgroundColor = "grey";
        par.removeEventListener("click", red);
    }

    add(2)
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("nacisnąłeś czerwony o wartości 2"));
    ul.appendChild(li);
}



let reset = document.getElementById("reset");
reset.onclick = function () {
    clear(ul);
    child.addEventListener("click", yellow);
    par.addEventListener("click", red);
    gpar.addEventListener("click", blue);
    gpar.style.backgroundColor = "blue"
    par.style.backgroundColor = "red"
    child.style.backgroundColor = "yellow"
    counter = document.getElementById("counter");
    sum = 0;
    counter.innerHTML = sum;
}


btn.onclick = function () {
    if (btn.textContent === "Stop Propagation") {
        //propagation started
        btn.innerText = "Start Propagation";
    }
    else {
        btn.innerText = "Stop Propagation";
        //propagation is stopped
    }
}
