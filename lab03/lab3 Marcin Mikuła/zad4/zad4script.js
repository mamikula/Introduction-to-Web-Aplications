var flag = 0;

let unlock = document.getElementById("unlock");
let incremet = document.getElementById("increment");
let reset = document.getElementById("reset");
var counter = document.getElementById("counter");
var taps = 0;

unlock.onclick = function() {
    flag = 1
}

incremet.onclick = function() {
    if (flag === 1){
        taps += 1;
        counter.innerHTML = taps;
    }
}

reset.onclick = function(){
    taps = 0;
    counter.innerHTML = taps;
    flag = 0;
}


