let snake;
let rez = 20;
let food;
let w;
let h;
let gameState = 0;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

  console.log(keyCode);

  if (keyCode == 49) {
    gameState = 0;
  }

  if (keyCode == 13) {
    gameState = 1;
  }

}

function draw(){
  background(220);
  fill(0);
  textSize(62);
  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    background("green");
    text("Snake", 170, 60);  
    
  }

  if (gameState == 1) {
    background("yellow");
    text("GAME RUNNING", 25, 45);
    game();
  }

  
}

function game() {
  scale(rez);
  
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  ellipse(food.x, food.y, 1, 1);
}