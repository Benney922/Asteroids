
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
  if(i<=4) {  //sørger for at det kun er 5 som spawner.
  asteroider[i].update();
    asteroider[i].show();
  }
  }
    asteroider.push(new Asteroide());


 
  
  
  
  
  
  
  
 
  
  
  
  
  
  
  
  
  
}

