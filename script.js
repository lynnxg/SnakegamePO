let snake;
let rez = 20;
let food;
let w;
let h;
let gameState = 0;
let song;
let eatSound;
let gameoverSound;

function preload() {
  img1 = loadImage("snake.jpg");
  song = loadSound('super-feyenoord.mp3');
  eatSound = loadSound('eat.wav');
  gameoverSound = loadSound('gameover.wav');
}

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


function draw() {
  background(220);
  fill(0);

  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    song.play();
    textSize(62);
    background("green");
    text("Snits", 130, 60);
    textSize(25);
    text("press enter to start the game", 50, 350);
    image(img1, 0, 100, 400, 200);
  }

  if (gameState == 1) {
    song.stop();
    background("yellow");
    game();
  }

  if (gameState == 2) {
    song.stop();
    
    textSize(62);
    background(255, 0, 0);
    fill('black');
    text("Game Over", 40, 80);
    textSize(25);
    text("press enter to restart the game",40, 200);
    snake = new Snake();
  }
}

function game() {
  scale(rez);

  if (snake.eat(food)) {
    eatSound.play();
    foodLocation();

    // new Food()
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    gameoverSound.play();
    gameState = 2;
  }
  noStroke();
  fill(255, 0, 0);
  ellipse(food.x, food.y, 1, 1);
}