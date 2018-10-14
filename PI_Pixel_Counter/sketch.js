let record = 1
let ins = 0;
let sum = 0;
let bestTry;
let tryPI;
let slider;
let scale;
// HIGHER SCALE LEADS TO MORE ACCURATE RESULT BUT SLOWER PROGRAM
// SCALE = WIDTH AND HEIGHT
function setup() {
  //MAKES SLIDER TO DETERMINE SCALE
  slider = createSlider(200, 800, 200);

}

function draw() {

  scale = slider.value();
  createCanvas(scale, scale);
  //COUNTS ALL PIXELS
  for(var x = 0; x < width; x++){
   for(var y = 0; y < width; y++){

    stroke(51);
    point(x, y);
    //IS PIXEL DISTANCE > RADIUS? (WOULD PIXEL FIT INTO CIRCLE INSIDE WINDOW?)
    let d = dist(x, y, width/2, height/2);
    if(d > scale / 2){
       sum++;
     }else{
      ins++;
      sum++;
      }
    }
   }
    
    //FORMULA FOR PI: 4 X (#OF POINTS THAT WOULD FIT IN CIRCLE) ÷ (TOTAL # OF POINTS)
    tryPI = 4 * ins/sum;
    //PRETTY THINGS
    textSize(18);
    fill(255);
    textAlign(CENTER);
    text("Goober's PI Calculator", scale / 2, 30);
    textAlign(LEFT);
    text("Scale = " + scale, 20, scale / 2 - scale/7);
    text("Approximated: " + tryPI, 20, scale / 2);
    text("Real PI Numb: " + PI, 20, scale / 2 + scale/7);
  }
