var box1,box2;
function setup() {
  createCanvas(600,600);
  box1 = createSprite(550, 550, 50, 50);
  box2 = createSprite(50,50,50,50);
  box1.shapeColor = "blue";
  box2.shapeColor = "blue";
  box1.velocityX = -2;
  box1.velocityY = -2;
  box2.velocityX = 2;
  box2.velocityY = 2;
}

function draw() {
  background(255,255,255); 
  
  if(istouching (box1, box2)){
    box1.shapeColor = "green";
    box2.shapeColor = "yellow"; 
  /*}else{
    box1.shapeColor = "blue";
  box2.shapeColor = "blue";*/
  }
 bounceoff (box1, box2);
  drawSprites();
}
function istouching (b1, b2){
  if (b1.x-b2.x<b1.width/2+b2.width/2 && b2.x-b1.x<b1.width/2+b2.width/2
    && b1.y-b2.y<b1.height/2+b2.height/2 && b2.y-b1.y<b1.height/2+b2.height/2 ){
      return true ;
    }else {
      return false ;
    }

}
function bounceoff (b1, b2){
  if (b1.x-b2.x<b1.width/2+b2.width/2 && b2.x-b1.x<b1.width/2+b2.width/2){
    b1.velocityX *= -1;
    b2.velocityX *= -1;
  }
  if (b1.y-b2.y<b1.height/2+b2.height/2 && b2.y-b1.y<b1.height/2+b2.height/2){
    b1.velocityY *= -1;
    b2.velocityY *= -1;
  }
}