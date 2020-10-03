var frect,mrect



function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
mrect=createSprite(500,200,50,50);
mrect.shapeColor="yellow";

frect.shapeColor="yellow";
}

function draw() {
  background(0);  

mrect.x=mouseX
mrect.y=mouseY
if(mrect.x-frect.x<mrect.width/2+frect.width/2&&
frect.x-mrect.x<mrect.width/2+frect.width/2&&
mrect.y-frect.y<mrect.height/2+frect.height/2&&
frect.y-mrect.y<mrect.height/2+frect.height/2){
frect.shapeColor="red";
mrect.shapeColor="red";
}

else{
frect.shapeColor="yellow";
mrect.shapeColor="yellow";
}
  drawSprites();


}