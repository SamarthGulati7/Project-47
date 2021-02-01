class Diamond {
    constructor(x,y,color) {
      
      this.body = createSprite(x,y,25,25);
      this.width = 25;
      this.height = 25;
      this.color = color;
      
    }
    display(){
      var pos =this.body;
      rectMode(CENTER);
      this.body.shapeColor =this.color;
      rect(pos.x, pos.y, this.width, this.height);
    }
  };