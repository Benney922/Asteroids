let liv = 3;
let asteroider = [];
let state = 3;



let Rad;

let pos;







function setup() {
  createCanvas(400, 400);
 

  

  
  Rad = 3 * HALF_PI;

  walker = new Walker(200, 200);

  
  
        

  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
}

function draw() {
background(0);

  if(state==3){
   
  
  
  walker.update();

  walker.show();

  
  
  
  
 
for(let i = 0;i<asteroider.length;i++){
  if(i<=4) {  //sørger for at det kun er 5 som spawner.
       asteroider[i].update();
    asteroider[i].show();
    asteroider[i].hitbox();
  }
  }
    asteroider.push(new Asteroide());


 
  
  
  
  
  
  
  
 
  
  
  
}
  if(liv==0){
  state=5;
    stroke(10);
    fill(255, 0, 0);
    textSize(55);
    text('Bolle vandt', 62, 175);
    textSize(40);
    text('restart', 140, 250);
if(mouseX > 140 && mouseX < 260 && mouseY > 215 && mouseY < 265){
   
       }
  }
}

function reset(){
  
}
