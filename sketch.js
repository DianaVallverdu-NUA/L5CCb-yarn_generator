const canvasWidth = 600;
const canvasHeight = 300;

const threadSpace = 2;

const colorPalette = ["#f542d4", "#42f57b", "#42f5e9", "#4e42f5", "#c242f5"];

let numberOfSegments = 0;

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
  //direction 0 means horizontal, direction 1 means vertical
  const vertical = random(1) < 0.5;

  //got color for this bit
  const color = random(colorPalette);
  stroke(color);

  // draw horizontally
  if (!vertical) {
    // calculate space it occupies
    let y0 = random(height);
    let segmentHeight = min(random(height - y0), 100);
    let segment = new Segment(false, y0, segmentHeight);

    while (segment.isOverlapping(drawnSegments)) {
      y0 = random(height);
      segmentHeight = min(random(height - y0), 100);
      segment = new Segment(false, y0, segmentHeight);
    }

    segment.draw();

    drawnSegments.push(segment);
  }

  //draw vertically
  if (vertical) {
    //calculate space it occupies
    let x0 = random(width);
    let segmentWidth = min(random(width - x0), 150);
    let segment = new Segment(true, x0, segmentWidth);

    while (segment.isOverlapping(drawnSegments)) {
      x0 = random(width);
      segmentWidth = min(random(width - x0), 150);
      segment = new Segment(true, x0, segmentWidth);
    }

    segment.draw();

    drawnSegments.push(segment);
  }

  //update counter and stop if needed
  numberOfSegments++;
  if (numberOfSegments > 5) {
    numberOfSegments = 0;
    drawnSegments = [];
    background(220);
  }
}

function mouseClicked() {
  draw();
}
