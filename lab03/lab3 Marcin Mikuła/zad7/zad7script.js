const url = 'http://localhost:3000/cities'


fetch('http://localhost:3000/cities')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        zadA(data);
        zadB(data);
        zadC(data);
        zadD(data);
        zadE(data);
        zadF(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function zadA(data) {
    var mainContainer = document.getElementById("AData");
    for (var i = 0; i < data.length; i++) {
        if (data[i].province === "małopolskie") {
            var div = document.createElement("div");
            div.innerHTML = data[i].name;
            mainContainer.appendChild(div);
        }
    }
}


function check_char(str1, char) {
    ctr = 0;
    for (let i = 0; i < str1.length; i++) {
        if ((str1.charAt(i) == char)) {
            ctr += 1;
        }
    }
    if (ctr == 2) return true;
    return false;
}


function zadB(data) {
    var mainContainer = document.getElementById("BData");
    for (var i = 0; i < data.length; i++) {
        if (check_char(data[i].name, "a")) {
            var div = document.createElement("div");
            div.innerHTML = data[i].name;
            mainContainer.appendChild(div);
        }
    }
}


function zadC(data) {
    var mainContainer = document.getElementById("CData");
    let arr = []
    for (var i = 0; i < data.length; i++) {
        arr.push([data[i].dentensity, data[i].name]);
    }
    arr.sort(function (a, b) { return b[0] - a[0] });
    var div = document.createElement("div");
    div.innerHTML = arr[4][1]
    mainContainer.appendChild(div);
}

function zadD(data) {
    var mainContainer = document.getElementById("DData");
    for (var i = 0; i < data.length; i++) {
        if (data[i].people > 100000) {
            var div = document.createElement("div");
            div.innerHTML = data[i].name + " City";
            mainContainer.appendChild(div);
        }
    }
}


function zadE(data) {
    var mainContainer = document.getElementById("EData");
    var more = 0;
    var less = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].people > 80000) {
            more += 1;
        }
        else less += 1;
    }
    var div = document.createElement("div");
    div.innerHTML = " Miast powyżej 80000 mieszkańców jest: " + more + "<br>" + " Miast poniżej 80000 mieszkańców jest: " + less
    mainContainer.appendChild(div);
}


function zadF(data) {
    var mainContainer = document.getElementById("FData");
    var sum = 0;
    var cnt = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].township.charAt(0) === "p") {
            cnt += 1;
            sum += data[i].area;
        }
    }
    var div = document.createElement("div");
    div.innerHTML = sum / cnt
    mainContainer.appendChild(div);
}