var tom,jerry,Img1,Img2,Img3,Img4,Img5,Img6,Img7;
var ;

function preload() {
    //load the images here

    Img1 = loadAnimation("images/cat1.png");
    Img2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    Img3 = loadAnimation("images/cat2.png","images/cat3.png");
    Img4 = loadAnimation("images/mouse4.png");
    Img5 = loadAnimation("images/cat4.png");
    Img6 = loadAnimation("images/garden.png");
    Img7 = loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,600);
    tom.addAnimation(Img1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation(Img7);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFTARROW){
    jerry.addAnimation("mouseTeasing",Img2);
    jerry.changeAnimation("mouseTeasing")
    jerry.frameDelay = 25;
    jerry.x = jerry.x - 5;
}

}
