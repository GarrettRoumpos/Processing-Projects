class Lava {
  float x = random(width);
  float y = random(-500, 0);
  float z = random(0, 20);
  float speed = map(z, 0, 20, 1.25, 0);
  float size = map(z, 0, 20, 5, 100);
  
  void sink() {
    y = y + speed;
    //float grav = map(z, 0, 20, 0, 0.5);
    //speed = speed + grav;
    
    if (y > height) {
      y = random(-500, -100);
      speed = map(z, 0, 20, 1.25, 0);
    }
  }
  
  void show() {
    float thick = map(z, 0, 20, 1, 5);
    strokeWeight(thick);
    stroke(194, 29, 14);
    fill(219, 73, 11);
    ellipse(x, y, size, size*2/3);
  }
}
