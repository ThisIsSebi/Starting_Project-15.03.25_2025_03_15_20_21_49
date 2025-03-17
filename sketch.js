function setup() {
  createCanvas(400, 400);
  print("hello")
}

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