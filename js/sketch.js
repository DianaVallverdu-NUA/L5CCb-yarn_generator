const canvasWidth = 600;
const canvasHeight = 300;

const threadSpace = 2;

let drawnSegments = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(1);
  background(220);
  strokeWeight(2);
  noLoop();
}

function drawVerticalLine(x0, y0, y1) {
  let inc = random(10);
  let prevX = x0;
  let prevY = y0;
  for (let y = y0 + 1; y < y1; y++) {
    let x = x0 + noise(inc) * 4;
    line(prevX, prevY, x, y);
    prevX = x;
    prevY = y;
    inc += 0.05;
  }
}

function drawHorizontalLine(y0, x0, x1) {
  let inc = random(10);
  let prevX = x0;
  let prevY = y0;
  for (let x = x0 + 1; x < x1; x++) {
    let y = y0 + noise(inc) * 4;
    line(prevX, prevY, x, y);
    prevX = x;
    prevY = y;
    inc += 0.05;
  }
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

  for (let i = 0; i < 5; i++) {
    drawYarn();
  }
}

function drawYarn() {
  //direction 0 means horizontal, direction 1 means vertical
  const vertical = random(1) < 0.5;

  //got color for this bit
  stroke(random(255), random(255), random(255));

  // draw horizontally
  if (!vertical) {
    let segment = new Segment(false);

    while (segment.isOverlapping(drawnSegments)) {
      segment = new Segment(false);
    }

    segment.draw();

    drawnSegments.push(segment);
  }

  //draw vertically
  if (vertical) {
    let segment = new Segment(true);

    while (segment.isOverlapping(drawnSegments)) {
      segment = new Segment(true);
    }

    segment.draw();

    drawnSegments.push(segment);
  }
}

function mouseClicked() {
  draw();
}
