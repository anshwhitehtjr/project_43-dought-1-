var hour, min, sec;
var scAngle_hour , scAngle_min , scAngle_sec;

function setup() {
  createCanvas(800,400);
  hour = hour();
  min = minute();
  sec = second();
  scAngle_sec = map(sec,0,60,0,360);
  scAngle_min = map(min,0,60,0,360);
  scAngle_hour = map(hour,0,60,0,360);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();
 // line();
  push();
  rotate(scAngle_sec);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}

/*function line(){
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
}*/