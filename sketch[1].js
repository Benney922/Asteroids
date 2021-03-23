let Rot = 0;

function setup() {
  createCanvas(400, 400);
  background(220);

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

}
