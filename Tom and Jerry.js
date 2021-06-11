var cat,mouse;
var catImg,mouseImg;

function preload() {
    //load the images here

    catImg = loadImage("cat1.png");

    mouseImg = loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,750,25,25);
    cat.addImage(catImg);

    mouse = createSprite(300,750,25,25);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFTARROW){

}

}
