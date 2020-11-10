class Box {
    
      

constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
        }
        this.width = width ;
        this.height = height ; 
      this.box= Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.box);
}

display(){
    var angle = this.box.angle ; 
    push();
    translate(this.box.position.x,this.box.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}

}