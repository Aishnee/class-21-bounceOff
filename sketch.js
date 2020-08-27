var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor="green";

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";

 
}

function draw() {





  background(0); 
  BouceOff (movingRect,fixedRect);
  drawSprites();
}

