var fixed , moving;
function setup() {
  createCanvas(1200,800);
fixed=createSprite(400,400,200,200);
moving=createSprite(200,200,200,200);
fixed.shapeColor= "PaleTurquoise"
moving.shapeColor="PaleTurquoise"

}
function draw() {
  background("black");  
  moving.x=World.mouseX
  moving.y=World.mouseY
  if(fixed.x - moving.x < fixed.width/2+moving.width/2 && moving.x-fixed.x<fixed.width/2+moving.width/2)
  {
    fixed.shapeColor= "black"
    moving.shapeColor="black"

  }
  else 
  {
    fixed.shapeColor= "PaleTurquoise"
moving.shapeColor="PaleTurquoise"

  }
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
}