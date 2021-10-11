
class Food {
  constructor(food, x, y, w, h) {
    this.food = food;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }


  draw() {
    function foodLocation() {
      let x = floor(random(w));
      let y = floor(random(h));
      food = createVector(x, y);
    }

    fill(255, 0, 0);
    ellipse(food.x, food.y, 1, 1);
  }
}