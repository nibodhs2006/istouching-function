var mrect,object1,object2,object3,object4
var frect




function setup() {
  createCanvas(800,800);
 mrect=createSprite(300,400,70,120)
 mrect.shapeColor='green'
mrect.debug=true

 frect=createSprite(500,200,130,90)
 frect.shapeColor='green'
 frect.debug=true

 object1=createSprite(470,440,140,55)
object1.shapeColor='green'
object1.debug=true


object2=createSprite(470,340,140,55)
object2.shapeColor='green'
object2.debug=true


object3=createSprite(670,440,140,55)
object3.shapeColor='green'
object3.debug=true


object4=createSprite(670,340,140,55)
object4.shapeColor='green'
object4.debug=true



}

function draw() {
  background('cyan');  

mrect.x=mouseX
mrect.y=mouseY

if(isTouching(object1)||isTouching(object2)||isTouching(object3)||isTouching(object4)||isTouching(frect)){
textSize(30)
fill('blue')
  text("mrect is touching a object",100,140)
mrect.shapeColor='red'

}
else{
  textSize(30)
fill('blue')
  text("mrect is not touching a object",100,140)
mrect.shapeColor='green'
}
  drawSprites();
}
