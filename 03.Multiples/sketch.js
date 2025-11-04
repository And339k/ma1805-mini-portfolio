let theText= ["cost", "1500", "for","the", "shoes"];
let word = theText[0];
let i=0;

function setup() {
createCanvas(1000, 1000);
frameRate(5);
}

function draw() {
  background(220);

  // The text display
  textSize(50);
  text(word,random(1000),height/2);

  //change the value of word 
  word=theText[i];
  i=i+1;
  if(i>=theText.length){
    i=0;
  }
  console.log(i);

}
