var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var pencil = { x:0, y:0};

//utk garis utk bentuk garis & ketajamannya
ctx.lineWidth = 10;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle = "#00CC99";

canvas.addEventListener("mousemove", function(e){
    //ketika mouse gerak, di isi koordinat pencil

    pencil.x = e.pageX - this.offsetLeft;
    pencil.y = e.pageY - this.offsetTop;
    console.log("coord: "+ pencil.x +","+ pencil.y);
}, false);

canvas.addEventListener("mousedown", function (e) {
    console.log("mouse clicked");
    ctx.beginPath();
    ctx.moveTo(pencil.x, pencil.y);
    ctx.lineTo(pencil.x, pencil.y);
    ctx.stroke();
    canvas.addEventListener("mousemove", onPaint, false);
}, false);

var onPaint = function (){
    ctx.lineTo(pencil.x, pencil.y);
    ctx.stroke();
}

canvas.addEventListener("mouseup", function(e) {
    canvas.removeEventListener("mousemove", onPaint, false);
}, false);

function firstcolor () {
    ctx.linewidth = 12;
    ctx.strokeStyle = "#0000ff";
};

function secondcolor () {
    ctx.linewidth = 12;
    ctx.strokeStyle = "#ffd700";
};
