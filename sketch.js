const canvasWidth = 600;
const canvasHeight = 300;

const threadSpace = 2;

const colorPalette = ["#f542d4", "#42f57b", "#42f5e9", "#4e42f5", "#c242f5"];

let numberOfSegments = 0;

let horizontalSegments = [];
let verticalSegments = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(1);
  background(220);
  strokeWeight(2);
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

    while (isOverLappingHorizontal(y0, y0 + segmentHeight)) {
      y0 = random(height);
      segmentHeight = min(random(height - y0), 100);
    }

    //draw a line every 2 pixels
    for (let i = 0; i < segmentHeight / threadSpace; i++) {
      drawHorizontalLine(y0 + threadSpace * i, 0, width);
    }

    horizontalSegments.push([y0, y0 + segmentHeight]);
  }

  //draw vertically
  if (vertical) {
    //calculate space it occupies
    let x0 = random(width);
    let segmentWidth = min(random(width - x0), 150);

    //ensure no overlap
    while (isOverlappingVertical(x0, x0 + segmentWidth)) {
      x0 = random(width);
      segmentWidth = min(random(width - x0), 150);
    }

    //draw a line every 4 pixels
    for (let i = 0; i < segmentWidth / threadSpace; i++) {
      drawVerticalLine(x0 + threadSpace * i, 0, height);
    }

    verticalSegments.push([x0, x0 + segmentWidth]);
  }

  //update counter and stop if needed
  numberOfSegments++;
  if (numberOfSegments > 5) {
    numberOfSegments = 0;
    background(220);
  }
}
