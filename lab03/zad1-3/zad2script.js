let btn = document.getElementById("button");

var pictures = ["imgs/image-1.jpg", "imgs/image-3.jpg"];
var colors = ["red", "blue"]
var iter = 0;

btn.onclick = function() {
    var Image_Id = document.getElementById("getImage");
        Image_Id.setAttribute("src", pictures[iter]);
        Image_Id.style.borderColor = colors[iter];
        iter = (iter + 1) % 2;

}
