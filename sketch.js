var img;
var img2;
var img3;
var img4;
var img5;
var button;
var imgratio;
var imgheight;
var rSlider, gSlider, bSlider;

//preload will load before setup runs
function preload() {
  //this relative file path starts in the same folder as your sketch.
  //In other words, in this example, make a folder called images in the same
  //folder as your sketch file (sketch.js) and then put the image file ("jomy.jpg")
  //inside of that.
  //img = loadImage("sk8.jpg");
  img = loadImage("nLeNgYb.png");
  img2 = loadImage("nLeNgYb.jpg");
  img3 = loadImage("vernal-equinox-march-20-first-day-spring-84@1x.jpg");
  img4 = loadImage("bright_colorful_wallpapers_002.jpg");
  img5 = loadImage("b1.jpg");

}

class SliderClass {
  constructor(x,y,length,center){
    this.slider = createSlider(0, length, center);
    this.slider.position(x,y);
    this.slider.style('width', '200px');
  }
}


function setup() {
  var imgratio = img.height/img.width;
  var imgheight = 1000*imgratio;
  createCanvas(1000, 1000*imgratio);
  //image(img2, 0, 0);
  image(img, 0, 0, 1000, 1000*imgratio); //draw the image to the canvas
  console.log("Image width: 1000" + " height: " + 1000*imgratio);
  console.log(imgratio);
  redSlider = new SliderClass(0*img.width/8, img.height,255,random(255));
  blueSlider = new SliderClass(0*img.width/8, img.height+120,255,random(255));
  greenSlider = new SliderClass(0*img.width/8, img.height+60,255,random(255));
  loadPixels();
 for(var i=4*1000*0;i<16*1000*1000*imgratio;i+=4) {
   if (pixels[i] < pixels[i+100] && pixels[i+1] < pixels[i+101] && pixels[i+2] < pixels[i+102]) {
     pixels[i] = 255; //red
     pixels[i+1] = 0; //green
     pixels[i+2] = 0; //blue
     pixels[i+3] = 200;
   } else if (pixels[i] > pixels[i+100] && pixels[i+1] > pixels[i+101] && pixels[i+2] > pixels[i+102]) {
     pixels[i] = 0; //red
     pixels[i+1] = random(0, 255); //green
     pixels[i+2] = 0; //blue
     pixels[i+3] = 200;
   } else {
     pixels[i] = 0; //red
     pixels[i+1] = 0; //green
     pixels[i+2] = random(0, 255); //blue
     pixels[i+3] = 200;
   }
 }
 updatePixels();

 loadPixels();
 for(var i=0;i<16*1000*1000*imgratio;i+=4) {
   if (pixels[i] > pixels[i+1] && pixels[i] > pixels[i+2]) {
     pixels[i] = 255; //red
     pixels[i+1] = 0; //green
     pixels[i+2] = 0; //blue
     pixels[i+3] = 255; //alpha
   } else if (pixels[i+1] > pixels[i] && pixels[i+1] > pixels[i+2]) {
     pixels[i] = 0; //red
     pixels[i+1] = 255; //green
     pixels[i+2] = 0; //blue
     pixels[i+3] = 255; //alpha
   }  else if(pixels[i+2] > pixels[i+1] && pixels[i+2] > pixels[i]){
     pixels[i] = 0; //red
     pixels[i+1] = 0; //green
     pixels[i+2] = 255; //blue
     pixels[i+3] = 255; //alpha
   } else {
     pixels[i] = 127; //red
     pixels[i+1] = 127; //green
     pixels[i+2] = 127; //blue
     pixels[i+3] = 200;
   }
 }
 updatePixels();
 //redFilter(0, imgheight);
 //greenFilter(0, imgheight);
 //blueFilter(0, imgheight);
 loadPixels();
 for(var i=0;i<16*1000*1000*imgratio;i+=4) {
 pixels[i] = pixels[i] - 50;
 pixels[i + 1] = pixels[i + 1] - 50;
 pixels[i+2] = pixels[i+2] - 50;

 }
updatePixels();
f1();
f2();
f3();
f4();
redFilter(0, img.height);
}

function redFilter(y1, y2){
  fill(255, 0, 0, 20);
  noStroke();
  rect(0, y1, 1000, y2);
}

function greenFilter(y1, y2){
  fill(0, 255, 0, 50);
  noStroke();
  rect(0, y1, 1000, y2);
}

function blueFilter(y1, y2){
  fill(0, 0, 255, 50);
  noStroke();
  rect(0, y1, 1000, y2);
}

function f1(){
  loadPixels();
 for (var i = 0; i < pixels.length; i+=4) {
   if (pixels[i] > 191) {
     pixels[i] = 255;
   } else if (pixels[i] > 127) {
     pixels[i] = 191;
   } else if (pixels[i] > 20) {
     pixels[i] = 127;
     } else {
     pixels[i] = 63;
   };
 }
 updatePixels();
}

function f2(){
  loadPixels();
  for (var i = 0; i < pixels.length; i+=4) {
    if (pixels[i] > 191) {
      pixels[i+1] = 255;
    } else if (pixels[i] > 127) {
      pixels[i+1] = 191;
    } else if (pixels[i] > 20) {
      pixels[i+1] = 127;
      } else {
      pixels[i+1] = 63;
    };
  }
  updatePixels();
}

function f3(){
  loadPixels();
  for (var i = 0; i < pixels.length; i+=4) {
    if (pixels[i] > 191) {
      pixels[i+2] = 255;
    } else if (pixels[i] > 127) {
      pixels[i+2] = 191;
    } else if (pixels[i] > 20) {
      pixels[i+2] = 0;
      } else {
      pixels[i+2] = 63;
    };
  }
  updatePixels();
}

function f4(){
  loadPixels();
  for (var i = 0; i < pixels.length; i+=4) {
    if (pixels[i] > 191) {
      pixels[i+3] = 255;
    } else if (pixels[i] > 127) {
      pixels[i+3] = 191;
    } else if (pixels[i] > 20) {
      pixels[i+3] = 127;
      } else {
      pixels[i+3] = 63;
    };
  }
  updatePixels();
}

function changeBG() {
  ellipse(random(0, 100), random(0, 100), 50, 50)
}

function draw() {
  /*var redVal = redSlider.slider.value();
  var greenVal = greenSlider.slider.value();
  var blueVal = blueSlider.slider.value();
  fill(redVal, greenVal, blueVal, 1);
  noStroke();
  rect(0, 0, img.width, img.height);
  fill(255, 255, 255);*/

}
