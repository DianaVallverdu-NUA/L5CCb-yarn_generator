class Segment {
  constructor(vertical, init, length) {
    this.vertical = vertical;
    this.init = init;
    this.length = length;
    this.end = init + length;
  }

  draw() {
    for (let i = 0; i < this.length / threadSpace; i++) {
      if (this.vertical)
        drawVerticalLine(this.init + threadSpace * i, 0, height);
      else drawHorizontalLine(this.init + threadSpace * i, 0, width);
    }
  }

  individualOverlap(segment) {
    //if different directions, no overlap
    if(this.vertical != segment.vertical) return false;

    //check if overlap
    if(this.init > segment.init && this.end < segment.end) return true;
    if(this.init < segment.init && this.end > segment.end) return true;
  
    //default to false
    return false;
  }

  isOverlapping(listOfSegments) {
    //check individual overlaps for a list of segments
    for(let segment of listOfSegments) {
      if(this.individualOverlap(segment)) return true;
    }

    //default to false
    return false;
  }
}
