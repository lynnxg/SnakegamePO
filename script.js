var s;
var scl = 20;
var food;

function setup() {
	createCanvas(600, 436);
  bg = loadImage('snake.jpg');
  s = new Snake;
  frameRate(10);
  pickLocation();
}

var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
	background(255);
  background(bg);
	s.update();
  s.show();

 if (s.eat(food)){
   pickLocation();
 }
  
	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
  fill('red')
  ellipse(food.x, food.y, scl, scl)
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
