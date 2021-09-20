class Ball{
  constructor(x,y,w,h,vx,vy,c){
    this.h = h;
    this.w = w;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.c = c;
  }

  draw() {
    fill(this.c);
    ellipse(this.x,this.y,20,20);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x < 25 || this.x >= 475){
      this.vx = this.vx * -1;
    }

    if(this.y < 25 || this.y >= 375){
      this.vy = this.vy * -1;
    }
  }

}
  var ball1;

function setup() {
	createCanvas(500, 400);
  ball1 = new Ball (30,200,20,20,3,3, "blue");
}

function draw() {
  background(225);

  ball1.draw();
}