//Creating a class - DartBoard2
/* 
 *
 * x and y is inputted in the sketch.js
 * If its speed is above 3 it disappears(If its hit)
 * If its visibility is lower than -10, score adds by 100.
 *
 */
class DartBoard2 extends BaseClass {
  constructor(x, y){
    super(x,y,100,100);
    // super(x,y,this.imageWidth,this.imageHeight);
    this.image = loadImage("images/DartBoard2.png");
    this.Visiblity = 255;
  }

  display(){

    // If the speed of the DartBoard2 is less than 3 then it display DartBoard2
    if(this.body.speed < 3){
      super.display();
      hitstatus = 0;
    } else {
      // If the speed of the DartBoard2 is more or equal than 3 then it disappears
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
      hitstatus = 1;
    }
  }

  score(){
    // If the visibilty is lower than -10 then the score is added by 100.
    if (this.Visiblity < 0 && this.Visiblity > -10){
      score = score + 100;
      scorestatus = 1;
    }
  }
}
