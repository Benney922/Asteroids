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
 //Sørger for at liv = 0 for at demonstrere hvordan det ville se ud.
  if(mouseX > 300){
    liv=0;
  }
  if(liv==0){
  state=5;
    stroke(10);
    fill(255, 0, 0);
    textSize(55);
    text('GAME OVER', 32, 175);
    textSize(40);
    text('restart', 140, 250);
  }
}
function mouseClicked(){
  if(mouseX > 140 && mouseX < 260 && mouseY > 215 && mouseY < 265){
   reset();
   state=3;
       }
}
function reset(){
  noStroke();
  fill(0);
  rect(0,0,400)
  liv = 3;
  
}
