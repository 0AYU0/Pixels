/*var img;
var photo1;
var rcolor = 0;
var gcolor = 0;
var bcolor = 0;
var wcolor = 0;
var filtered1;

function preload(){
    img = loadImage('nLeNgYb.jpg');
}

function setup() {
    //create canvas with the width of the loaded photo
  	createCanvas(photo1.width, photo1.height);
}


function draw(){
  showPhoto();
  contrast();
  lightener();

}

function showPhoto(){
    image(img, this.x, this.y);
  }

function contrast(){
    loadPixels();
    for(var i=0;i<4*img.width*img.height*4;i+=4) {
      let theReach = 5
      if (pixels[i] < pixels[i+100] && pixels[i+1] < pixels[i+101] && pixels[i+2] < pixels[i+102]) {
        pixels[i] = 0; //red
        pixels[i+1] = 0; //green
        loadPixels();
        pixels[i+2] = random(0, 255); //blue
        pixels[i+3] = 200; //alpha
      } else if (pixels[i] > pixels[i+100] && pixels[i+1] > pixels[i+101] && pixels[i+2] > pixels[i+102]) {
        pixels[i] = random(0, 255); //red
        pixels[i+1] = 0; //green
        pixels[i+2] = 0; //blue
        pixels[i+3] = 200; //alpha
      }  else {
        pixels[i] = 0; //red
        pixels[i+1] = random(0, 255); //green
        pixels[i+2] = 0; //blue
        pixels[i+3] = 200; //alpha
      }
      pixels[i+3] -= 0; //alpha
    }
    updatePixels();
}
*/

/*function whole(){
    loadPixels();
    for(var i=0;i<4*img.width*img.height*4;i+=4) {
      if (pixels[i] > pixels[i+1] && pixels[i] > pixels[i+2]) {
        rcolor+=1;
      } else if (pixels[i+1] > pixels[i] && pixels[i+1] > pixels[i+2]) {
        gcolor+=1;
      }  else if(pixels[i+2] > pixels[i] && pixels[i+2] > pixels[i+1]){
        bcolor+=1;
      } else(){

      }
    }
    if (rcolor > gcolor && rcolor > bcolor){
      fill(255, 0, 0, 0);
      rect(0, 0, img.width, img.height);
    } else if (gcolor > rcolor && gcolor > bcolor){
      fill(0, 255, 0, 0);
      rect(0, 0, img.width, img.height);
    } else if (bcolor > rcolor && bcolor > gcolor){
      fill(0, 0, 255, 0);
      rect(0, 0, img.width, img.height);
    } else{
      fill(127, 127, 127, 0);
      rect(0, 0, img.width, img.height);
    }
    updatePixels();
  }

}*/

/*  filter(rfilter)

}
function rfilter(){
  random(0, 7)
  }

        this.bluebegin = photo1.height/2;
        this.blueend = photo1.height/2 + 100;
	}
    blueTint(){
        //change tint of pixels in a stripe by modifying the red channel
        loadPixels();
        for(let i=4 * photo1.width * this.bluebegin; i<4 * photo1.width * this.blueend ; i+=4) {
          pixels[i] = pixels[i]-50; //red
        }
        updatePixels();
    }
//move the placement of the tint filter based on mouse position
    moveTint(){
        if(mouseY <= photo1.height/2){
           this.bluebegin = mouseY;
     }
     else{
         this.blueend = mouseY;
     }

    }

}
*/

/*var img;

function preload() {
  img = loadImage("nLeNgYb.png");
}

function setup() {
  createCanvas(img.width, img.width);
  pixelDensity(1);
  img.loadPixels();
  loadPixels();
}

function draw() {
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++ ) {
      // Calculate the 1D location from a 2D grid
      var loc = (x + y*img.width)*4;
      // Get the R,G,B values from image
      var r,g,b;
      r = img.pixels[loc];
      // Calculate an amount to change brightness based on proximity to the mouse
      var maxdist = 50;
      var d = dist(x, y, mouseX, mouseY);
      var adjustbrightness = 255*(maxdist-d)/maxdist;
      r += adjustbrightness;
      // Constrain RGB to make sure they are within 0-255 color range
      r = constrain(r, 0, 255);
      // Make a new color and set pixel in the window
      //color c = color(r, g, b);
      var pixloc = (y*width + x)*4;
      pixels[pixloc] = r;
      pixels[pixloc+1] = r;
      pixels[pixloc+2] = r;
      pixels[pixloc+3] = 255;
    }
  }
  updatePixels();
}
*/
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

function setup() {
  var imgratio = img.height/img.width;
  var imgheight = 1000*imgratio;
  createCanvas(1000, 1000*imgratio);
  //image(img2, 0, 0);
  image(img, 0, 0, 1000, 1000*imgratio); //draw the image to the canvas
  console.log("Image width: 1000" + " height: " + 1000*imgratio);
  console.log(imgratio);
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  button = createButton('click me');
button.position(1005, 5);
button.mousePressed(changeBG);
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

function redFilter(y1, y2){
  fill(255, 0, 0, 50);
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

function changeBG() {
  ellipse(random(0, 100), random(0, 100), 50, 50)
  //filter.remove();
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill(r, g, b, 255);
  noStroke();
  rect(0, 0, 1000, 1000*imgratio);
  text("red", rSlider.x * 2 + rSlider.width, 35);
  text("green", gSlider.x * 2 + gSlider.width, 65);
  text("blue", bSlider.x * 2 + bSlider.width, 95);
}
