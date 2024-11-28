const canvasWidth = 600;
const canvasHeight = 300;

const threadSpace = 4;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(1);
  background(220);
  strokeWeight(2);
  noLoop();
}

function drawVerticalLine(x0, y0, y1) {
  line(x0, y0, x0, y1);
}

function drawHorizontalLine(y0, x0, x1) {
  line(x0, y0, x1, y0);
}

function isOverlappingVertical(x0, x1) {
  for (segment of verticalSegments) {
    if (x0 > segment[0] && x1 < segment[1]) return true;
    if (x0 < segment[0] && x1 > segment[1]) return true;
  }
}

function isOverLappingHorizontal(y0, y1) {
  for (segment of horizontalSegments) {
    if (y0 > segment[0] && y1 < segment[1]) return true;
    if (y0 < segment[0] && y1 > segment[1]) return true;
  }
}

function draw() {
  numberOfSegments = 0;
  drawnSegments = [];
  background(220);
  drawYarn();
}

function drawYarn() {
  //got color for this bit
  stroke(random(255), random(255), random(255));

  // draw horizontally
  const horizontalSegment = new Segment(false);
  horizontalSegment.draw();

  stroke(random(255), random(255), random(255));

  //draw vertical
  const verticalSegments = new Segment(true);
  verticalSegments.draw();
}
