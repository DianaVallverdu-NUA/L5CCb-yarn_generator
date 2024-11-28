const canvasWidth = 600;
const canvasHeight = 300;

const numberOfRows = canvasHeight / 4;
const numberOfCols = canvasWidth / 4;

const colorPalette = ["#f542d4", "#42f57b", "#42f5e9", "#4e42f5", "#c242f5"];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(1)
  background(220);
}

segments = 0;

function draw() {
  strokeWeight(2);
  
  //direction 0 means horizontal, direction 1 means vertical
  const vertical = random(1) < 0.5;
  
  //got color for this bit
  const color = random(colorPalette);
  stroke(color);
  
  // draw horizontally
  if (!vertical) {
    // calculate space it occupies
    const y0 = random(height);
    const segmentHeight = random(height - y0);
    
    //draw a line every 2 pixels
    for (let i = 0; i < segmentHeight / 4; i++) {
      line(0, y0 + 4 * i, width, y0 + 4 * i);
    }
  }
  
  //draw vertically
  if (vertical) {
    //calculate space it occupies
    const x0 = random(width);
    const segmentHeight = random(width - x0);
    
    //draw a line every 4 pixels
    for (let i = 0; i < segmentHeight / 4; i++) {
      line(x0 + 4 * i, 0, x0 + 4 * i, height);
    }
  }
  
  //update counter and stop if needed
  segments++;
  if(segments > 4) noLoop();
}
