const canvasWidth = 600;
const canvasHeight = 300;

const numberOfRows = canvasHeight / 4;
const numberOfCols = canvasWidth / 4;

const colorPalette = ["#f542d4", "#42f57b", "#42f5e9", "#4e42f5", "#c242f5"];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noLoop();
}

function draw() {
  background(220);
  strokeWeight(2);

  for (let col = 0; col < numberOfCols; col++) {

    const color = random(colorPalette);
    stroke(color);

    const x = canvasWidth / numberOfCols * col;
    const startY = 0;
    const endY = canvasHeight;
    line(x, startY, x, endY);
  }

  for (let row = 0; row < numberOfRows; row++) {

    const color = random(colorPalette);
    stroke(color);
    const y =  canvasHeight / numberOfRows * row;
    const startX = 0;
    const endX = canvasWidth;
    line(startX, y, endX, y);
  }
}
