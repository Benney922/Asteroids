let asteroider = [];



let Rad;

let pos;








function setup() {
  createCanvas(400, 400);
  

  
  Rad = 3 * HALF_PI;

  walker = new Walker(200, 200);


  
  
  
  
  
  
  
 
  //asteroider.push(new Asteroide());
  
  
  
  
  
  
  
  
  
  
  
}

function draw() {
background(0);

  
  
  walker.update();

  walker.show();

  
  
  
  
  
  
  
 
for(let i = 0;i<asteroider.length;i++){
  if(i<=5) {  //sørger for at det kun er 5 som spawner. MANGLER DOKUMENTATION.
  asteroider[i].update();
    asteroider[i].show();
  }
  }
    asteroider.push(new Asteroide());


 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}











































































































































































































class Asteroide {
  constructor() { 
    this.r = 20;
    this.pos = createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
    //MANGLER DOKUMENTATION.
  }
  
  update(){ 
  this.pos.add(this.vel)

  }
  
  show(){ //ikke lavet men virker indtil videre
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
  
}
