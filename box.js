class Box {
constructor(x,y,w,h){
//properties
var Box_options ={
    restitution: 1.0
}
this.body = Bodies.rectangle(x,y,w,h,Box_options);
World.add(world,this.body);
this.width =w;
this.height =h;
}
//functions
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();

}

}