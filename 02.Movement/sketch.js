let i=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 fill(255,0,0);

  // Eyes
  fill(255,0,0)
  circle(50,50,50)
  circle(200,50,50)

  // Mouth
  fill(0,255,0,255);
  ellipse(150,150,i,40);

  //quad
 quad(50, 62,i, 86, i,50, i,50,38,i, 14, 50);

 //quad
  quad(20, 50, i,80, i,30, i,80, 70,i, 20, 70);

  //Increment i
  i=i+1;
}
