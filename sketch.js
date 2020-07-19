var hr,mn,sc;

var centre;

var hrhand,mnHand,scHand;

var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255,255,255);
  angleMode(DEGREES);

  push();
  ellipseMode(RADIUS);
  fill("white");
  ellipse(200,200,100,100);
  pop();


  hr = hour();
  mn = minute();
  sc = second();
  
  hrAngle = map(hr,0,60,0,360);
  
  mnAngle = map(mn,0,60,0,360);
  
  scAngle = map(sc,0,60,0,360);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(200,120,200,200);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(200,130,200,200);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(200,140,200,200);
  pop();

  //textSize(50);
  //text("Time: " + hr + ": " + mn + ": " + sc, 50,100);

  drawSprites();
}