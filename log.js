class Log {
    constructor(x, y, width, height,angle) {
      var options = {
          'restitution':0.6,
          'friction':1.2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      Body.setAngle(this.body,angle)//setAngle is a function that accepts body and the angle
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };