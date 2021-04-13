class Walker {

  constructor(x, y) {

    this.pos = createVector(x, y);

  }

  update() {

    if (keyIsDown(32)){
      
      
      
      this.pos.sub(this.vel);
      
    }
    
    if (keyIsDown(RIGHT_ARROW)) {

      Rad = Rad + 0.1

    } else if (keyIsDown(LEFT_ARROW)) {

      Rad = Rad - 0.1

    }

    this.vel = createVector(cos(Rad), sin(Rad))

    if (keyIsDown(UP_ARROW)) {

      this.pos.add(this.vel);

    }

  }

  show() {

    stroke(255);

    strokeWeight(10);

    point(this.pos.x, this.pos.y);

  }

}