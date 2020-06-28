var fixedrect;
var Movingrect;
var gobj1;
var gobj2;
function setup() {
  
  createCanvas(800,400);
 fixedrect= createSprite(100, 200, 50, 50);
 Movingrect= createSprite(400,200,50,50);
 gobj1=createSprite(300,200,50,50);
 gobj2=createSprite(700,200,50,50);
 fixedrect.shapeColor="red";
 Movingrect.shapeColor="red";
 gobj1.shapeColor="blue";
 gobj2.shapeColor="blue";

 fixedrect.velocityX=4;
 Movingrect.velocityX=-3;
  gobj1.velocityX=4;
  gobj2.velocityX=-3;
 
}

function draw() {
  background(0,0,0);  
  drawSprites();
 // Movingrect.x=mouseX;
//Movingrect.y=mouseY;
if(isTouching(fixedrect,Movingrect)){
 fixedrect.shapeColor="blue";
  Movingrect.shapeColor="blue";
}
else{
   fixedrect.shapeColor="red";
    Movingrect.shapeColor="red";
}
if(isTouching(gobj1,gobj2)){
  gobj1.shapeColor="maroon";
  gobj2.shapeColor="maroon";
 }
 else{
    fixedrect.shapeColor="blue";
     Movingrect.shapeColor="blue";
 }
}

function isTouching(object1,object2){ 
  
 if(object1.x-object2.x<object1.width/2+object2.width/2
   && object2.x-object1.x<object1.width/2+object2.width/2
  && object1.y-object2.y<object1.height/2+object2.height/2
  && object2.y-object1.y<object2.height/2+object2.height/2){
  
  return true;
  }
 else{
  return false;
 }
 }
