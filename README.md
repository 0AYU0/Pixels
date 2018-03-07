# Pixels
This image filter first turns an image to red, green, and blue based on the contrast between pixels 25 units apart.  After that, it reads the value of the red of a pixel and adjusts the red, green, blue, and transparency values based on that.  ex. If the red value is more than 191, make it 255.  If it is more than 127, make it 191, if it is more than 20, make it 127.  If it less than 20, make it 63.  This process is repeated for all values.

Boundary Cases: After each filter is pressed, the picture stays static unless one refreshes the page.  Also, on many other pictures, the contrast effect isn't as clear as it is in the current picture.  It should always turn red, green, and blue, and the filters should change the colors in a few different ways, so the look of the image might not always be optimal, although the colors should be good.

Sources : The buttons were created using the button DOM element at - https://p5js.org/reference/#/p5/createButton
