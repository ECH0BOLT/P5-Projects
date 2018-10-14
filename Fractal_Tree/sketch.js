
var angle;
var slider;
var sliderB;
var sliderC;
function setup() {
  createCanvas(400, 400);
	slider = createSlider(0, 360, 25)
  sliderB = createSlider(5, 200, 75)
  sliderC = createSlider(0.1, 0.7, 0.5, 0.05)
  sliderB.position(401, 350)
  sliderC.position(401, 320)
	angleMode(DEGREES)
}

function draw() {
  background(220);
  translate(width/2, height);
  text('Length',160, -40);  
  text('Angle',160, -10);
	text('Extent',160, -70);  
  drawTrees(sliderB.value())
 
}

function drawTrees(len){
  angle = slider.value()
  stroke(0);
  line(0,0, 0, -len);
  translate(0, -len);
  if(len > 2){
  push();
  rotate(angle);
  drawTrees(len * sliderC.value());
  pop();
  push();
  rotate(-angle);
  drawTrees(len * sliderC.value())
  pop();
  }
  len *= .67
 
  
}