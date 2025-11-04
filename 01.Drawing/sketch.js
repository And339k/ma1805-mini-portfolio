function setup() {
  createCanvas(400, 400);
}


function setup() {
  createCanvas(640, 480); 
  background(230);    
  // noStroke();              
}

function setup() {
  createCanvas(100, 100);

  background(200);

  circle(50, 50, 25);

  describe('A white circle with black outline in the middle of a gray canvas.');
}

rect(100, 100, 200, 200, 10, 10, 5, 5) 
function draw() {
  background(220);
  fill(255,0,0);

  // Eyes
  fill(255,0,0)
  circle(50,50,50)
  circle(200,50,50)

  // Mouth
  fill(0,255,0,255);
  ellipse(150,150,200,40);
}

function setup() {
  createCanvas(640, 480); 
  background(230);    
  // noStroke();              
}

function draw(){
    fill(0); 
    rect(0, 0, 100, 100); // x, y, w, h
    
    fill(64);
		rect(50, 50, 100, 100); 

		fill(128)
		rect(100, 100, 100, 100);
		
		fill(196);
		rect(150, 150, 200, 200);

		fill(220);
		rect(300, 300, 400, 400); 
}

stroke(20, 200, 200);  // r, g, b 
strokeWeight(10);      // Width of stroke
fill(200, 20, 200);    // r, g, b

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
}
function draw() {
  //background
  background(random(230, 240));
  //left
  noStroke()
  fill(0);
  rect(97, 169, 79, 12);
  //right
  rect(365, 184, 20, 15);
  fill(20, 20, 120);
  beginShape();
  vertex(365, 199);
  vertex(385, 199);
  vertex(372, 216);
  vertex(358, 216);
  endShape(CLOSE);
  //bottom
  noFill();
  stroke(130);
  strokeWeight(2);
  ellipse(255, 350, static_size, static_size);
  //mouse interactions
  stroke(180);
  ellipse(mouseX, mouseY, moving_size, moving_size);
  if (mouseIsPressed) {
    static_size = floor(random(5, 20));
 }
}

let moving_size = 50;
let static_size = 20;
ellipse(255, 350, static_size, static_size);
ellipse(mouseX, mouseY, moving_size, moving_size);
if (mouseIsPressed) {
  static_size = floor(random(5, 20));
}

if (mouseIsPressed) {
  static_size = floor(random(5, 20));
}

function setup() {
  createCanvas(640, 480); 
  background(230);    
  // noStroke();              
}

function draw(){
    fill(0); 
    rect(0, 0, 100, 100); // x, y, w, h
    
    fill(64);
		rect(50, 50, 100, 100); 

		fill(128)
		rect(100, 100, 100, 100);
		
		fill(196);
		rect(150, 150, 200, 200);

		fill(220);
		rect(300, 300, 400, 400); 

stroke(20, 200, 200);  // r, g, b 
strokeWeight(10);      // Width of stroke
fill(200, 20, 200);    // r, g, b
}


