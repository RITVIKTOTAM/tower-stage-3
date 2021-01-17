class Paper{
  constructor(x, y, width,height) {
   
      var options = {
        'isStatic':false,
        'restitution':0,
        'friction':1,
        'density':1.2
    }
    
    
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world,this.body);
    
  }
  display(){
    if(this.body.speed > 3){
      World.remove(world,this.body);
      push()
      this.visibility = this.visibility - 5;
      tint (255,this.visibility);
       pop()
   }
     else{

      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("salmon");
      rectMode(CENTER);
      rect(0, 0, this.width,this.height);
      pop();

     }
    
  }
};