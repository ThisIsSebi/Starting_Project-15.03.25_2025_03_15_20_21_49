// Create your own variable
// Declare Variable 
// Initialize Variable
 // Assignment operation
// Use Variable

let circleX = 100;
let circleY = 200;
let widthCircle = 1;

function setup(){
  createCanvas(400,400)
}

function mousePressed(){
  circleX = 0;
  circleY = 0;
}

function draw(){
  background(0)
  // What does noStroke() mean?
  fill(0, 255,0)
  noStroke()
  // mouseX, mouseY is an option that locks the X and Y number and tracks it. 
  // For example: If you are at the point x:50 with your mouse, x will be 50
  // If you are at y:20 with your mouseY will be 20
  circle(circleX, circleY, widthCircle)

  circleX = circleX + 0.5;
  circleY = circleY + 0.5;
  widthCircle = widthCircle + 0.5;
}

// Circle Y
// Grow
// Add 3 or 4 variables



// Happens once
/*
function setup() {
  createCanvas(400, 400);
  print("hello")
}

// Happens forever ( in a loop)
function draw() {
  background(200, 200 ,200);
  // This the code for the lines
  stroke("red");
  strokeWeight(2);
  line(0,0,400, 400);
  line(400, 0, 0, 400);
  // This is the 1st rectangular
  fill(0,0,4);
  stroke(0,255,0);
  strokeWeight(5);
  rect(50, 150, 100, 100, 100);
  // This is the 2nd rectangular
  fill(0, 0, 0);
  stroke(0,255,0);
  strokeWeight(4);
  rect(250, 150, 100, 100, 100);
  // This is the 3rd object, an ellipse
  fill(0,0,0,50);
  strokeWeight(4);
  fill(0,0,0);
  ellipse(200,50,100,75);
  // This is the 4th object, a rectangular
  rect(150,300,100,75);
  describe("My first project using p5.js")
}
  */

