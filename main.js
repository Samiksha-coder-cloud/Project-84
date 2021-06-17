canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

var background_Image="bg car.jpg";

var car1Height=150;
var car1Width=100;
var car1X=10;
var car1Y=10;
var car1Image="car1.png";

var car2Height=150;
var car2Width=100;
var car2X=10;
var car2Y=130;
var car2Image="car2.png";


function add() {
    background=new Image();
    background.onload=drawBackground;
    background.src=background_Image;

    car1_img=new Image();
    car1_img.onload=drawCar1;
    car1_img.src=car1Image;

    car2_img=new Image();
    car2_img.onload=drawCar2;
    car2_img.src=car2Image;
}

function drawBackground() {
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function drawCar1() {

    ctx.drawImage(car1_img,car1X,car1Y,car1Height,car1Width);
}

function drawCar2() {

    ctx.drawImage(car2_img,car2X,car2Y,car2Height,car2Width);
}

window.addEventListener("keydown",mykeyDown);

function mykeyDown(e) {
    var keyPressed=e.keyCode;

     //Car1 code ⬇⬇

    if (keyPressed=="38") {
        car1_up();
        console.log("Up is Pressed");
    }

    if (keyPressed=="40") {
        car1_down();
        console.log("Down is Pressed");
    }

    if (keyPressed=="37") {
        car1_left();
        console.log("Left is Pressed");
    }

    if (keyPressed=="39") {
        car1_right();
        console.log("Right is Pressed");
    }

    //Car2 code ⬇⬇

    if (keyPressed=="87") {
        car2_up();
        console.log("Key w is Pressed");
    }

    if (keyPressed=="83") {
        car2_down();
        console.log("Key s is Pressed");
    }

    if (keyPressed=="65") {
        car2_left();
        console.log("Key a is Pressed");
    }

    if (keyPressed=="68") {
        car2_right();
        console.log("Key d is Pressed");
    }
}

//Car1 code ⬇⬇
function car1_up() {
    if (car1Y >= 0) {
        car1Y= car1Y-10;
        console.log(car1Y);
        drawBackground();
        drawCar1();
        drawCar2();
    }
}
function car1_down() {
    if (car1Y >= 450) {
        car1Y= car1Y+10;
        console.log(car1Y);
        drawBackground();
        drawCar1();
        drawCar2();
    }
}
function car1_left() {
    if (car1X >= 0) {
        car1X = car1X-10;
        console.log(car1X);
        drawBackground();
        drawCar1();
        drawCar2();
    }
}
function car1_right() {
    if (car1X >= 700) {
        car1X = car1X+10;
        console.log(car1X);
        drawBackground();
        drawCar1();
        drawCar2();
    }
}


//Car2 code ⬇⬇
function car2_up() {
    if (car2Y >= 0) {
        car2Y= car2Y-10;
        console.log(car2Y);
        drawBackground();
        drawCar1();
        drawCar2();
    }
}
function car2_down() {
    if (car2Y >= 450) {
        car2Y= car2Y+10;
        console.log(car2Y);
        drawBackground();
        drawCar1();
        drawCar2();
    }
}
function car2_left() {
    if (car2X >= 0) {
        car2X = car2X-10;
        console.log(car2X);
        drawBackground();
        drawCar1();
        drawCar2();
    }
}
function car2_right() {
    if (car2X >= 700) {
        car2X = car2X+10;
        console.log(car2X);
        drawBackground();
        drawCar1();
        drawCar2();
    }
}

