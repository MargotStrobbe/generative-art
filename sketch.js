let img;
let cnv;
let pos = 0;
let ptNum = 200;
let rectSize = 750;
let size = 10;
function preload(){
  
  /* Random plaatje inladen */
  let face = loadImage('assets/face.jpg');
  let face1 = loadImage('assets/face1.jpg');
  let face2 = loadImage('assets/face2.jpg');
  let face3 = loadImage('assets/face3.jpg');
  let face4 = loadImage('assets/face4.jpg');
  let face5 = loadImage('assets/face5.jpg');
  let face6 = loadImage('assets/face6.jpg');
  picture = [face, face1, face2, face3, face4, face5, face6]; // array
  
  /* Random nummer tussen 1 ^ 5 die we afronden */
  let number = Math.floor(Math.random() * (picture.length - 1) + 1);
  
  /* random plaatje */
  img = picture[number];
}

function setup() {
  
  /* Aanmaken van canvas */
  cnv = createCanvas(windowWidth, windowHeight);
  background(random(0, 255))
}

function draw() { 
  /* background party */
  push();
  background(0,15);
  stroke(random(0, 255), random(0, 255), random(0, 255));
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(QUARTER_PI);
  rotate(radians(frameCount * 59));
  noFill();
  rect(0, 0, 750, 750);
  pop();
  
    /* Border album */
  push();
  translate(width/2, height/2);
  fill('black');
  stroke('white');
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, rectSize, rectSize);
  
  /* Random background */
  stroke(random(0,255), random(0,255), random(0,255));
  strokeWeight(2);
  for(let i =0; i<ptNum; i++){
    point(random(-rectSize / 2, rectSize / 2), random(-rectSize / 2, rectSize / 2));
  }
  pop();
  
  imageMode(CENTER)
  image(img, width/2, height/2);
  
  /* Title*/
  push();
  translate(width/2, height-120);
  textFont('Trebuchet MS');
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(5);
  text('BY MARGOT',4 ,-17);
  fill(254,0,246)
  text('BY MARGOT',3 ,-18);
  fill('white');
  text('BY MARGOT',0 ,-20);
  textSize(15);
  fill('white');
  text('Scroll down for fun' ,0 ,15);
  pop();

  /* Puntjes genereren */
  translate(width/2 - img.width/2, height/2 - img.height/2);
  push();
  for(let col = 0; col <img.width; col+=10){
    for(let row = 0; row <img.height; row+=10){
      let c = img.get(col,row);
      stroke(color(c));
      // strokeWeight(size)
      point(col, row);
    }
  }
  pop();
  
}

/* Mousewheel puntjes groter maken */

function mouseWheel(event) {
   // size = (size * event.deltaY) / 5;
  
  if(size * event.deltaY <= 0) {
    // background('black');
    size = 1;
  } else {
    size = size + 1;
    image(img, width, height);
  }
  strokeWeight(size)
}


