class Asteroide {
  constructor() { 
  
    this.t1 = random(15,20);
    this.t2 = random(15,20);
    this.t3 = random(15,20);
    this.t4 = random(15,20);
  
    this.r = 20;
    this.pos = createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1,1.2));
  }
  
  update(){ 
  this.pos.add(this.vel)
  if(this.pos.x>width){
    this.pos.x=0;
     }
  if(this.pos.x<0){
    this.pos.x=width;
     }
  if(this.pos.y>height){
    this.pos.y=0;
     }
  if(this.pos.y<0){
    this.pos.y=height;
     }
    if (mouseX > this.pos.x-20 && mouseX < this.pos.x+20 && mouseY > this.pos.y-20 && mouseY < this.pos.y+20) {
      print("1")
    }
   
  }
  
  show(){ 
    strokeWeight(1);
    noFill();
    //ellipse(this.pos.x,this.pos.y,this.r,this.r);
    beginShape();//Fået dem alle til at være random, lav nogle flere vertexer.
    vertex(this.pos.x-this.t1,this.pos.y-this.t2);
    vertex(this.pos.x-this.t3,this.pos.y+this.t4);
    vertex(this.pos.x+this.t2,this.pos.y+this.t3);
    vertex(this.pos.x+this.t4,this.pos.y-this.t1);
    
    
    endShape(CLOSE);
  }
  
}
