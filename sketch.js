var hr,mn,sc;

var centre;

var hrhand,mnHand,scHand;

var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0,0,0);
  angleMode(DEGREES);
  
  hr = hour();
  mn = minute();
  sc = second();

  textSize(25);
  text("Time: " + hr + ": " + mn + ": " + sc, 70,370);

  textSize(15);
  text("12",193.5,103);
  text("3",297.5,204);
  text("6",195,307);
  text("9",95.5,204);

  translate(200,200);
  rotate(-90);
  
  hrAngle = map(hr%12,0,12,0,360);
  
  mnAngle = map(mn,0,60,0,360);
  
  scAngle = map(sc,0,60,0,360);

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}