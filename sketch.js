const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
backgroundImg=loadImage("sunrise1.png")
   getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here

 
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") 
    var jason = await response.json()
    //console.log(jason)

    var dateTime= jason.datetime
    //console.log(dateTime)

    var time = dateTime.slice(11,13)
    console.log(time)
    
   if(time>4 && time<6)
   {
       backgroundImg=loadImage("sunrise1.png")
   }
   else if(time>6 && time<8)
   {
       backgroundImg=loadImage("sunrise2.png")
   }
   else if(time>8 && time<9)
   {
       backgroundImg=loadImage("sunrise3.png")
   }
   else if(time>9 && time<10)
   {
       backgroundImg=loadImage("sunrise4.png")
   }
   else if(time>10 && time<12)
   {
       backgroundImg=loadImage("sunrise5.png")
   }
    else if(time>12 && time<15)
   {
       backgroundImg=loadImage("sunrise6.png")
   } 
   else if(time>15 && time<18)
   {
       backgroundImg=loadImage("sunset7.png")
   }
   else if(time>18 && time<20)
   {
       backgroundImg=loadImage("sunset7.png")
   }
   else if(time>20 && time<24)
   {
       backgroundImg=loadImage("sunset7.png")
   }
   else(time>1 && time<4)
   {
       backgroundImg=loadImage("sunset7.png")
   }
}
