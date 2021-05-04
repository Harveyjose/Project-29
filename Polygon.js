class  Polygon{
    constructor(x, y){
      var options = {
              'restitution' : 0.3,
              'friction': 5,
              'density' : 1
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      World.add(world,this.body);
      this.image = loadImage("Tower-Siege-1-Template-main/polygon.png");
  }
  display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill("pink");
      ellipse(0, 0, this.radius);
      pop();
  }
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
    } 
  