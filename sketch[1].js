
let asteroider = [];











function setup() {
  createCanvas(400, 400);
  

  

  
  
  
  
  
  
  
 
  //asteroider.push(new Asteroide());
  
  
  
  
  
  
  
  
  
  
  
}

function draw() {
background(0);

  
  
  
  
  
  
  
  
  
 
for(let i = 0;i<asteroider.length;i++){
  if(i<=5) {  //sørger for at det kun er 5 som spawner.
  asteroider[i].update();
    asteroider[i].show();
  }
  }
    asteroider.push(new Asteroide());


 
  
  
  
  
  
  
  
 
  
  
  
  
  
  
  
  
  
}

