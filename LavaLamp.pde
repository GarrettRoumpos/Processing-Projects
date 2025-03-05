Lava[] lamp = new Lava[100];

void setup() {
  size(640, 1280);
  for (int i = 0; i < lamp.length; i++) {
    lamp[i] = new Lava();
  }
}

void draw() {
  background(36);
  for (int i = 0; i < lamp.length; i++) {
    lamp[i].sink();
    lamp[i].show();
  }
}
