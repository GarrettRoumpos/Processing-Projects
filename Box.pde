class Box {
 PVector pos;
 float r;
 
 Box(float x, float y, float z, float s) {
   pos = new PVector(x, y, z);
   r = s;
 }
 
 ArrayList<Box> generate() {
   ArrayList<Box> boxes = new ArrayList<Box>();
   for (int x = -1; x < 2; x++) {
     for (int y = -1; y < 2; y++) {
       for (int z = -1; z < 2; z++) {
         
         int sum = abs(x) + abs(y) + abs(z);
         
         float newR = r/3;
         // Menger: sum > 1
         // Menger - Corners: sum <= 2 && sum > 1
         // Menger + Center: sum > 1 || sum == 0
         // sum <= 2 && sum > 1 || sum == 0
         if (sum <= 2 && sum > 1 || sum == 0) {
           Box b = new Box(pos.x+x*newR, pos.y+y*newR, pos.z+z*newR, newR);
           boxes.add(b);
         }
       }
     }
   }
   return boxes;
 }
 
 void show() {
   pushMatrix();
   translate(pos.x, pos.y, pos.z);
   noStroke();
   fill(65, 105, 225);
   box(r);
   popMatrix();
 }
}
