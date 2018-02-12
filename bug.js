let photo1;
let filtered1;

function preload(){
    photo1 = loadImage('nLeNgYb.jpg');
}

function setup() {
    //create canvas with the width of the loaded photo
  	createCanvas(photo1.width, photo1.height);
	filtered1 = new FilteredPhoto();  //create filtered image from the FilteredPhoto class
}


function draw(){
	 filtered1.showPhoto(); //show the loaded photo (see class below)
    filtered1.contrast(); //tint it
    filtered1.lightener(); // move the tint based on the mouse position-- all this stuff is defined in the FilteredPhoto class
}


//make a class or template called FilteredPhoto, from which many similar altered photos can be made.
class FilteredPhoto {
    // make a constructor to hold starting data for your processes -- anything that you'll update should go as a parameter in here
	constructor(bluebegin, blueend){
        this.bluebegin = photo1.height/2;
        this.blueend = photo1.height/2 + 100;
	}

  contrast(){
    loadPixels();
    for(var i=0;i<4*photo1.width*photo1.height*4;i+=4) {
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

  lightener(){
    for(var i=0;i<4*photo1.width*photo1.height*4;i+=4) {
      if (pixels[i+2] > pixels[i+1] && pixels[i] > pixels[i+1]) {
        pixels[i] = 255; //red
        pixels[i+1] = 255; //green
        pixels[i+2] = 255; //blue
        pixels[i+3] = 50; //alpha
      } else if (pixels[i+1] > pixels[i] && pixels[i+1] > pixels[i+2]) {
      gcolor+=1;
        pixels[i] = 0; //red
        pixels[i+1] = 255; //green
        pixels[i+2] = 0; //blue
        pixels[i+3] = 50; //alpha
      }  else if(pixels[i] > pixels[i+1] && pixels[i] > pixels[i+2]){
        pixels[i] = 255; //red
        pixels[i+1] = 0; //green
        pixels[i+2] = 0; //blue
        pixels[i+3] = 200; //alpha
      }
    }
    updatePixels();
  }

  /*whole(){
    loadPixels();
    for(var i=0;i<4*photo1.width*photo1.height*4;i+=4) {
      if (pixels[i] > pixels[i+1] && pixels[i] > pixels[i+2]) {
        rcolor+=1;
      } else if (pixels[i+1] > pixels[i] && pixels[i+1] > pixels[i+2]) {
      }  else if(pixels[i+2] > pixels[i] && pixels[i+2] > pixels[i+1]){
        bcolor+=1;
      }
    }
    if (rcolor > gcolor && rcolor > bcolor){
      fill(255, 0, 0, 0);
      rect(0, 0, photo1.width, photo1.height);
    } else if (gcolor > rcolor && gcolor > bcolor){
      fill(0, 255, 0, 0);
      rect(0, 0, photo1.width, photo1.height);
    } else if (bcolor > rcolor && bcolor > gcolor){
      fill(0, 0, 255, 0);
      rect(0, 0, photo1.width, photo1.height);
    } else{
      fill(127, 127, 127, 0);
      rect(0, 0, photo1.width, photo1.height);
    }
    updatePixels();
  }*/

//show the photo at 0,0
	showPhoto(){
		image(photo1, 0, 0);
	}

  /*  blueTint(){
        //change tint of pixels in a stripe by modifying the red channel
        loadPixels();
        for(let i=4 * photo1.width * this.bluebegin; i<4 * photo1.width * this.blueend ; i+=4) {
          pixels[i] = pixels[i]-50; //red
        }
        updatePixels();


    }
    moveTint(){
        if(mouseY <= photo1.height/2){
           this.bluebegin = mouseY;
     }
     else{
         this.blueend = mouseY;
     }

   }*/
}
