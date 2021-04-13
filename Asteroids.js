class Asteroide {
  constructor() { 
    this.r = 20;
    this.pos = createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1,1.2));
  }
  
  update(){ 
  this.pos.add(this.vel)
  if(this.pos.x>width){
    this.pos.x=0.1;
     }
  if(this.pos.x<0){
    this.pos.x=width-0.1;
     }
  if(this.pos.y>height){
    this.pos.y=0.1;
     }
  if(this.pos.y<0){
    this.pos.y=height-0.1;
     }
  }
  
  show(){ //ikke lavet men virker indtil videre
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
  
}