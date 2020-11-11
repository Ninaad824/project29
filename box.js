class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution : 0.4

    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push()
    translate(pos.x,pos.y)
    rotate(this.angle)
    rectMode(CENTER);
    fill("pink");
    rect(0,0, this.width, this.height);
    pop()
  }
};
