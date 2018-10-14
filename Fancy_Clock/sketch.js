var seconds;
var hours;
var minutes;

function setup() {
  createCanvas(400, 400);  
  
}

function draw() {
  translate(width / 2, height / 2);
  var oRing = map(hours, 0, 24, 0, 400/3)
  var mRing = map(minutes, 0, 59, 0, 400/3)
  var iRing = map(seconds, 0, 59, 0, 400/3)
 	seconds = second();
  hours = hour();
  minutes = minute();
  background(220);
  noFill()
  stroke(0)
  ellipse(0 - 400/3, 0, 400/3);
  ellipse(0, 0, 400/3);
  ellipse(400/3, 0, 400/3);
  textSize(12)
  text("Next Day", -22 - 400/3, -200/3 - 5);
  text("Next Hour", -25, -200/3 - 5);
  text("Next Minute", -30 + 400/3, -200/3 - 5);
  textSize(20);
  text("Circle Clock", -50, -500/3 - 5);
  noStroke();
  fill(255, 0, 0);
  ellipse(0 - 400/3, 0, oRing);
  fill(218,112,214);
  ellipse(0, 0, mRing);
  fill(0, 0, 255, 150);
  ellipse(400/3, 0, iRing);
}