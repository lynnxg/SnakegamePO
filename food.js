class Food {
  constructor() {
    this.pos = createVector(int(random(w)), int(random(h)));
  }

  draw() {    
    fill("red");
    ellipse(this.pos.x, this.pos.y, 1, 1);
  }
}
