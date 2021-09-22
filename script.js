function setup() {
	createCanvas(600, 436);
  bg = loadImage('snake.jpg');
}

var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function draw() {
	background(bg);
	
	fill('blue');
	ellipse(xpos, ypos, 20, 20);
	
	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
}

function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;


}

function keyPressed() {
	if (keyCode === UP_ARROW){
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW){
    s.dir(0,1);
  } else if (keyCode === RIGHT_ARROW){
    s.dir(1,0);
  } else if (keyCode === LEFT_ARROW){
    s.dir(0,1);
  }
}
