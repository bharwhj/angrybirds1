class Log extends Baseclass {
    constructor(x, y, height, angle) {
     
      super(x, y, 20, height,);
      this.image=loadImage("sprites/wood2.png")
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      
    
    }
   
  };
  