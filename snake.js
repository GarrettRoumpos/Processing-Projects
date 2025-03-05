function Snake() {
  this.x = floor(width/2);
  this.y = floor(height/2);
  this.speed = 10;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.dir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      this.speed += 0.1;
      frameRate(this.speed);
      return true;
    } else {
      return false;
    }
  }
  
  this.death = function() {
    if ((snake.x === 380 && snake.xSpeed === 1) ||
         (snake.x === 0 && snake.xSpeed === -1) ||
         (snake.y === 380 && snake.ySpeed === 1) ||
         (snake.y === 0 && snake.ySpeed === -1)) {
      this.gameOver();
    }
    for (var i = 0; i < this.tail.length; i++) {
      var posT = this.tail[i];
      var d = dist(this.x, this.y, posT.x, posT.y);
      if (d < 10) {
        this.gameOver();
      }
    }
  }
  
  this.gameOver = function() {
    //console.clear();
    console.log("Game over!");
    console.log("Your score was:", this.total);
    console.log("----------------------------");
    setup(); 
  }
  
  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y)
    
    this.x = this.x + this.xSpeed*scl;
    this.y = this.y + this.ySpeed*scl;
    
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }
  
  this.show = function() {
    fill(0, 255, 0);
    for (var i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
    
  }
  
}