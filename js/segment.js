class Segment {
  constructor(vertical) {
    this.vertical = vertical;

    //calculate init and length according to direction
    if (vertical) {
      this.init = random(width);
      this.length = min(random(width - this.init), 150);
    }

    if (!vertical) {
      this.init = random(height);
      this.length = min(random(height - this.init), 100);
    }

    //calculate end point
    this.end = this.init + this.length;
  }

  //draw current segment
  draw() {
    //loop through length with a step of threadSpace
    for (let i = this.init; i < this.end; i += threadSpace) {
      if (this.vertical) drawVerticalLine(i, 0, height);
      else drawHorizontalLine(i, 0, width);
    }
  }
}
