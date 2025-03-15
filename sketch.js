function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0 ,200);
  stroke("red")
  strokeWeight(2)
  line(0,0,400, 400)
  line(400, 0, 0, 400)
  rect(50, 150, 100, 100, 100);
  rect(250, 150, 100, 100, 100);
  describe("My first project using p5.js")
}