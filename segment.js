class Segment {
  constructor(vertical, init, length) {
    self.vertical = vertical;
    self.init = init;
    self.length = length;
    self.end = init + length;
  }

  draw() {
    for (let i = 0; i < self.length / threadSpace; i++) {
      if (self.vertical)
        drawVerticalLine(self.init + threadSpace * i, 0, height);
      else drawHorizontalLine(self.init + threadSpace * i, 0, width);
    }
  }
}
