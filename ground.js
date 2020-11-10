class Ground{


constructor(x,y,width,height){

    var object_options = {
        isStatic:true
        }
        this.width = width;
        this.height = height;
        this.object = Bodies.rectangle(x,y,width,height,object_options);
        World.add(world,this.object);

}

display() {
    rectMode(CENTER);
    rect(this.object.position.x,this.object.position.y,this.width,this.height);
}

}