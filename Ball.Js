var xBall = Math.floor(Math.random() * 175) + 25; 
var yBall = 50; 
var diameter = 40;  

var xBallChange = 5; 
var yBallChange = 5;  
 

class Ball{
  constructor() {
    this.y = 60;;
    this.x = width - 60;
  }
  show() {
    fill(255);
    ellipse(xBall,yBall,diameter);
  }
}
