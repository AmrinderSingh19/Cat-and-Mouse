var cat
var mouse
var garden


function preload() {
    //load the images here
   
}  loadImage=catImg1,catImg2,catImg3,catImg4;
   loadImage=mouseImg1,mouseImg2,mouseImg3,mouseImg4;
   loadImage=garden

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    Text(mouseX + , + mouseY,10,45 );

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.X - mouse.X < (cat.width - mouse.width)/2)
   }

     //write code here to change animation
{  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


cat.addAnimation("catLastImage",catImg3);
cat.changeAnimation("catLastImage")

   if(keyCode === LEFT_ARROW){
       cat.VvelocityX =-5;
       cat.addAnimation("catRunning",catImg2);
       cat.changeAnimation("catRunning");
   }


}
