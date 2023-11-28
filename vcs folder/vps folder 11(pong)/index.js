var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 10;

var dx = 3;
var dy = -3;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0 , Math.PI + 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}
var score = 0;
function drawScore(){
    ctx.font = "16px,ariel";
    ctx.fillText("Score: "+score,8,20);    
}

var lives=3;
function drawLives(){
    ctx.font ="16px, ariel";
    ctx.fillText("Lives:"+ lives, canvas.width - 65, 20);
}
var paddleWidth = 75
var paddleHeight = 10
var paddleX = (canvas.width - paddleWidth) / 2
function drawPaddle(){
ctx.beginPath();           // y awal 
ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
ctx.fillStyle="#000000";
ctx.fill();
ctx.closePath();
}
document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e){
    var relativeX = e.clientX-canvas.offsetLeft;
    if(relativeX> 0 && relativeX<canvas.width){
        paddleX = relativeX - paddleWidth / 2;
    }
}

//logic brick
var bricks=[];
var brickRowCount = 3;
var brickColCount = 5;
for(var r = 0; r < brickRowCount; r++) {
    bricks[r] = [];
    for (var c = 0; c < brickColCount; c++){
        bricks[r][c] = {x: 0,y:0,status:1};// status awal tiap bricks
    }
}

var brickWidth = 75; var brickHeight = 20; var brickPadding = 10; 
var brickOffSetTop = 30; var brickOffSetLeft=30;
function drawBricks(){
    for(var r=0; r<brickRowCount;r++){
        for(var c=0; c<brickColCount;c++){
            if(bricks[r][c].status==1){
                var brickX= (c*(brickWidth+brickPadding))+brickOffSetLeft
                var brickY= (r*(brickHeight+brickPadding))+brickOffSetTop;
                bricks[r][c].X = brickX;
                bricks[r][c].Y = brickY;
                ctx.beginPath();
                ctx.rect(brickX,brickY,brickWidth,brickHeight);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function collisionDetection(){
    for(var r=0; r<brickRowCount;c++){
            for(var c=0; c<brickColCount;c++){
            var b = bricks[r][c];
            if (b.status==1){
                if(x>b.x && x<b.x+brickWidth && y>b.y && y<b.y+brickHeight){
                    dy = -dy;
                    b.status = 0;
                    score++;
                }
            }
        }
    }
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //bersihkan canvas sebelum gambar.
    drawBall(); //gambar bola sesuai x dan y terakhir 
    drawScore();
    drawLives();
    drawPaddle();
    drawBricks();
    collisionDetection();
    if(x+dx>canvas.width-ballRadius){ //batas kanan
        dx=-dx;
    }else if (x+dx<ballRadius) { // batas kiri
        dx=-dx;
    }
    if(y+dy<ballRadius){ //batas atas
        dy=-dy;
    }
    else if(y+yd>canvasHeight-ballRadius){
        // batas bawah
        if (x>paddleX && x<paddleX + paddleWidth){
            //nabrak batas bawah diantara paddle
            dy=-dy;
        }
        else{
            lives--;
            if(!lives){
                alert("ENDGAME");
                document.location.reload();
            } else {
                //continue game with new ball
                x = canvas.width/2;
                y = canvas.height - 30;
                dx=3;
                dy=-3;
            }
        }
    }
    x= x+dx ; //update nilai x
    y= y+dy ;//update nilai y
    requestAnimationFrame(draw);
}

draw();