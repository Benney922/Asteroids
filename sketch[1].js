let asteroider = [];











function setup() {
  createCanvas(400, 400);
  

  

  
  
  
  
  
  
  
  
  //asteroider.push(new Asteroide());
  
  
  
  
  
  
  
  
  
  
  
}

function draw() {
background(0);

  
  
  
  
  
  
  
  
  
  
   //kan også bare undvære for løkken 
for(let i = 0;i<asteroider.length;i++){
    asteroider[i].update();
    asteroider[i].show();
  }
    asteroider.push(new Asteroide());


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}











































































































































































































class Asteroide {
  constructor() { //Ikke lavet
    this.x = random(-100,width);
    this.y = random(-100,height);
    this.r = 20;
    this.xdi = random(-1,1);
    this.ydi = random(-1,1);
  }
  
  update(){ 
  this.x += this.xdi;
  this.y += this.ydi;
       
  }
  
  show(){ //ikke lavet men virker indtil videre
    ellipse(this.x,this.y,this.r,this.r);
  }
  
}
