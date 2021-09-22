var s;
var scl = 20;
var food;

function setup() {
	createCanvas(600, 436);
  bg = loadImage('snake.jpg');
  s = new Snake;
  frameRate(10);
}

var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function draw() {
	background(255);
  background(bg);
	s.update();
  s.show();
	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
}

function keyPressed() {
	if (keyCode === UP_ARROW){
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW){
    s.dir(0,1);
  } else if (keyCode === RIGHT_ARROW){
    s.dir(1,0);
  } else if (keyCode === LEFT_ARROW){
    s.dir(-1,0);
  }
}
