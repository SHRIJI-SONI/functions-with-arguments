var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(100,30,50,50)
  gameObject1.shapeColor="blue"
  gameObject2=createSprite(200,30,50,50)
  gameObject2.shapeColor="blue"
  gameObject3=createSprite(300,30,50,50)
  gameObject3.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
    movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="red";
    gameObject2.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green";
    gameObject2.shapeColor="green"
  }
  drawSprites();
}

