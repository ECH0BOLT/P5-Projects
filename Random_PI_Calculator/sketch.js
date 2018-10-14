let circx = 200;
let circy = 200;
let dotx;
let doty;
let inc = 0;
let outc = 0;
let c = 0;
function setup() {
  createCanvas(400, 400);
	background(220);
	fill(50,50,255,50);
	rect(0,0,399,399)
	fill(255,50,50,50);
	ellipse(circx,circy,400,400)
}

function draw() {
  dotx = random(400);
	doty = random(400);
	let d = dist(circx, circy, dotx, doty);
	if(d > 200){
		stroke(255)
		point(dotx, doty)
		outc = outc + 1;
		c++
	}else{
		stroke(0)
		point(dotx, doty)
		inc = inc + 1;
		c++
	}
	
	let pitry =(inc/c)*4
	if(Math.abs(PI-pitry)<0.0001){
     
    
    print(pitry)
			}
}
