var stage, w, h, loader, startX, startY;
var background, bird, groundTile, ground, pipe, pipes, scoreCounter;

var isJump = false; // is the bird jumping?
var jumpAmount = 120; // How high is the jump?

var isDead = false; // is the bird isDead?
var masterPipeDelay = 78; // delay between pipes
var pipeDelay = masterPipeDelay; //counter used to monitor delay

var isScoreShown = false; // show counter outline for score?
var isGameStarted = false;

//load your assets here
function init() {
    if (window.top != window) {
        document.getElementById("header").style.display = "none";
    }
    stage = new createjs.Stage("testCanvas");
    createjs.Touch.enable(stage);

    w = stage.canvas.width;
    h = stage.canvas.height;

    manifest = [{
        src: "img/bird.png",
        id: "bird"
    }, {
        src: "img/background.png",
        id: "background"
    }, {
        src: "img/ground_tile.png",
        id: "groundTile"
    }, {
        src: "img/pipe.png",
        id: "pipe"
    }];

    loader = new createjs.LoadQueue(false);
    loader.addEventListener("complete", gameReady);
    loader.loadManifest(manifest);
}

//asset is loaded, put those loaded assets in the screen
function gameReady() {
    background = new createjs.Shape();
    background.graphics.beginBitmapFill(loader.getResult("background")).drawRect(0, 0, w, h);

    stage.addChild(background);

    //masukin bird ke stage
    var birdData = new createjs.SpriteSheet({
        "images" : [loader.getResult("bird")],
        "frames" : {
            "width" : 92,
            "height" : 64,
            "regX" : 46,
            "regY" : 32,
            "count" : 3
        }, 
        "animations" : {
            "fly":[0.2,"fly",0.21],
            "dive":[1,1,"dive", 1]

        }
    });
    bird = new createjs.Sprite(birdData,"fly");
    startX = (w / 2) - (92 / 2);
    startY = 512;
    bird.setTransform(startX,startY, 1,1);
    bird.framerate=60;

    stage.addChild(bird);

    //msk in groound
    groundTile = loader.getResult("groundTile");
    ground = new createjs.Shape();
    ground.graphics.beginBitmapFill(groundTile).drawRect(0, 0, w + groundTile.width, groundTile.height);
    ground.TileW = groundTile.width;
    ground.y = h - groundTile.height;
    stage.addChild(ground);


    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", handleTick);
}

function jumpBird() {

}

function dieBird() {

}

function generatePipes(deltaS) {

}

function showScore() {

}

//handle event per second.
function handleTick(event) {
    var deltaS = event.delta / 1000;
    stage.update(event);
}