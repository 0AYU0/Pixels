/*
 Title: RGB Filter
 Imagined, Designed, and Programmed by: Alexander Yu
 Date: 2/19/2018
 Description: 
 This filter intially changes the color of a pixel in an image to red, green or blue, based on the color of the pixel twenty-five pixels across.
 There are 4 filters that can be added on top that change the color of red, green, blue, or alpha, based on the red value.
 
 The links to the images used below are here : 
 img - https://www.desktop-background.com/p/2015/06/07/960475_vivi-ornitier-final-fantasy-ix-wallpapers-walldevil-best-free_1920x1080_h.jpg
 img2 - https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/vernal-equinox-march-20-first-day-spring-84@2x.jpg
 img3 - https://a04.t26.net/taringa/avatares/8/C/4/4/9/F/Lita_C/20D.jpg
 
 Includes Code From:
 * Lizzy Brooks
 * Danny Santana
 */
  
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var button;
var imgratio;
var imgheight;

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
  //img4 = loadImage("bright_colorful_wallpapers_002.jpg");
  //img5 = loadImage("b1.jpg");
  //img6 = loadImage("VictorFrankenstein_ClipMurderInvestigation.jpg");

}

class ButtonClass{
  constructor(input, x, y, func, size){
    this.button = createButton(input)
    this.button.position(x, y);
    this.button.style('width', size)
    this.button.mousePressed(func)
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
  f1button = new ButtonClass('Filter 1', 10, img.height-140, f1, '75px');
  f2button = new ButtonClass('Filter 2', 300, img.height-140, f2, '75px');
  f3button = new ButtonClass('Filter 3', 590, img.height-140, f3, '75px');
  f4button = new ButtonClass('Filter 4', img.width-440, img.height-140, f4, '75px');
  //redfilter = new ButtonClass('Red Filter', 155, img.height-100, redFilter, '100px');
  //greenfilter= new ButtonClass('Green Filter', 445, img.height-100, blueFilter, '100px');
  //bluefilter = new ButtonClass('Blue Filter', 745, img.height-100, greenFilter, '100px');

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

}

function redFilter(){
  fill(255, 0, 0, 50);
  noStroke();
  rect(0, 0, 1000, 1000*imgratio);
}

function greenFilter(){
  fill(0, 255, 0, 255);
  noStroke();
  rect(0, 0, 1000, 1000*imgratio);
}

function blueFilter(){
  fill(0, 0, 255, 50);
  noStroke();
  rect(0, 0, 1000, 1000*imgratio);
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
      pixels[i+2] = 127;
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

function draw() {
}
