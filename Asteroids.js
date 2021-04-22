class Asteroide {
  constructor() { 
  
    this.t1 = random(15,20);
    this.t2 = random(15,20);
    this.t3 = random(15,20);
    this.t4 = random(15,20);
    this.t5 = random(5,10);
    this.t6 = random(5,10);
    this.t7 = random(25,35)
  
    this.r = 20;
    this.pos = createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
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
    }
   
  }
  
  show(){ 
    strokeWeight(1);
    noFill();
    //ellipse(this.pos.x,this.pos.y,this.r,this.r);
    beginShape();
     vertex(this.pos.x-this.t1,this.pos.y-this.t2); //venstre top
    vertex(this.pos.x-this.t7,this.pos.y-this.t6);
    vertex(this.pos.x-this.t3,this.pos.y+this.t4); //venstre bund
    vertex(this.pos.x-this.t5,this.pos.y+this.t1);
    vertex(this.pos.x+this.t2,this.pos.y+this.t3); //højre bund
    vertex(this.pos.x+this.t6,this.pos.y+this.t6);
    vertex(this.pos.x+this.t4,this.pos.y-this.t1); //højre top
    vertex(this.pos.x,this.pos.y-this.t2); 
    endShape(CLOSE);
  }
  
}
