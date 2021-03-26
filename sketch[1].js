let Rot = 0;
let asteroider = [];











function setup() {
  createCanvas(400, 400);
  background(0);

  translate(100,100)

  rect(-25, -25, 50, 50);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function draw() {

  angleMode(DEGREES);

  translate(100, 100)

  if (keyIsDown(RIGHT_ARROW)) {

    Rot = Rot + 3

    rotate(Rot)

    background(220);

    rect(-25, -25, 50);

  } else if (keyIsDown(LEFT_ARROW)) {

    Rot = Rot - 3

    rotate(Rot)

    background(220);

    rect(-25, -25, 50);

  }
  
  
  
  
  
  
  
  
  
  
for(let i = 0;i<asteroider.length;i++){
    asteroider[i].update();
    asteroider[i].show();
  }
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}









































































































































































































function mouseClicked(){
  asteroider.push(new Asteroide());
   
}



class Asteroide {
  constructor() { //Ikke lavet
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = 20;
  }
  
  update(){ 
  //de står alle stille og ryster fordi rnd bare bliver ved og ved.
        let rnd = random(0,1);
    print(rnd)
    if(rnd < 0.25){
      this.y += -0.5;
    }
    if(rnd > 0.5 && rnd < 0.75){
      this.y += 0.5;
    }
    if(rnd > 0.25 && rnd < 0.5){
      this.x += -0.5;
    }
    if(rnd > 0.75){
      this.x += 0.5;
    }
  }
  
  show(){ //ikke lavet men virker indtil videre
    ellipse(this.x,this.y,this.r,this.r);
  }
  
}
