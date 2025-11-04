let img;

// Load the image.
function preload() {
  img = loadImage('photo.jpg');
}

function setup() {
  createCanvas(1000, 1000);

  background(50);

  // Draw the image.
  image(img, 0, 0);

}