var bgimg, snow

function preload(){
bgimg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  snow = new Snow()
}

function draw() {
  background(bgimg);  
  drawSprites();
  snow.display()
}