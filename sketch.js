var snake;
var scl = 20;
var food;

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  frameRate(10);
  pickLocation();
  console.log("Press any arrow to start!")
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  
  for (var i = 0; i < snake.tail.length; i++) {
      var check = snake.tail[i];
      var d = dist(check.x, check.y, food.x, food.y);
      if (d < 1) {
        pickLocation();
      }
    }
  
}

function draw() {
  background(51);
  
  if (snake.eat(food)) {
    pickLocation();
  }
  snake.death();
  snake.update();
  snake.show();
  //console.log("%f, %f", snake.x, snake.y);

  fill(255, 0, 0);
  rect(food.x, food.y, scl);
  
}

function keyPressed() {
  if (snake.total > 0) {
    if (keyCode === UP_ARROW && snake.ySpeed != 1) {
      snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW && snake.ySpeed != -1) {
      snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW && snake.xSpeed != -1) {
      snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW && snake.xSpeed != 1) {
      snake.dir(-1, 0);
    }
  } else {
    if (keyCode === UP_ARROW) {
      snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
      snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
      snake.dir(-1, 0);
    }
  }
  if (keyCode === SHIFT) {
    snake.total++;
  }
  
}

