let ball;

var xPaddle = 125; 
var yPaddle = 900; 
var xPaddle2 = 1005; 
var yPaddle2 = 900;


var paddleWidth = 100; 
var paddleHeight = 100;  
var paddleWidth2 = 100; 
var paddleHeight2 = 100; 

var started = false;
var player1score = 0;  
var player2score = 0;  
var startTextPosition = 250


function setup() {
  fill(255);
  createCanvas(1100, 800);
}

function draw() {
  background(0);
  //keyPressed()
  if (!started) { 
     textSize(48); 
     fill(225);
     text("Click Here to Start", 350, startTextPosition);  
  } 
  if (mouseIsPressed) {
    xPaddle = -25; 
    yPaddle = 350; 
    xPaddle2 = 1025; 
    yPaddle2 = 350;
    started = true;
    player1score = 0; 
    player2score = 0; 
    startTextPosition = 900;
  } else {
    started = false;
  }
 
    ball = new Ball();
    ball.show();

//continuously change the ball’s location by incrementing its //x & y coordinates by the xBallChange and yBallChange values
    xBall += xBallChange; 
    yBall += yBallChange; 
  
  /*
  Use the windowWidth and windowHeight variables to help detect when the ball hits a wall.

The following code checks to see if the ball’s x-coordinate is between 0 and windowWidth, and if the ball’s y-coordinate is between 0 and windowHeight. If the coordinates are outside those ranges, the ball has hit a wall. 
*/

  if (xBall < diameter/2 ||  
    xBall > windowWidth - 0.5*diameter) { 
    xBallChange *= random(-.97,-1.03);   
  } 
  
  if (yBall < diameter/2 ||  
    yBall > windowHeight - diameter) { 
    yBallChange *= random(-.97,-1.03); 
  } 
  
  if ((xBall > xPaddle && xBall < xPaddle + paddleWidth) && (yBall + (diameter/2) >= yPaddle)) { 
    xBallChange *= random(-.97,-1.03); 
  }
  
  if ((xBall > xPaddle2 && xBall < xPaddle2 + paddleWidth2) && (yBall + (diameter/2) >= yPaddle2)) { 
    xBallChange *= random(-.97,-1.03); 
  }
  
  //Paddle 1
  fill(0, 255, 255); 
  noStroke(); 
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
  
  //Score Text 1
  fill(0, 255, 255); 
  textSize(24); 
  text("Score: " + player1score, 60, 25);  
  
  //Paddle 2
  fill(255, 255, 0); 
  noStroke(); 
  rect(xPaddle2, yPaddle2, paddleWidth2, paddleHeight2);
  
  //Score Text 2
  fill(255, 255, 0); 
  textSize(24); 
  text("Score: " + player2score, 950, 25); 
  
  upDateScore()
}  

function upDateScore() {
  if (xBall > 1085) { 
    player1score++;
    xBall -=2;
  } 
  else if (xBall < 24) { 
    player2score++;
    xBall +=2;
  } 
}  
function keyPressed() { 
  // W key
  if (keyCode == 87 && yPaddle > 0) { 
    yPaddle -= 25; 
  } 
  // S key
  else if (keyCode == 83 && yPaddle < 700) { 
    yPaddle += 25; 
  }  
 
  // W key
  else if (keyCode == 38 && yPaddle2 > 0) { 
    yPaddle2 -= 25; 
  } 
  // S key
  else if (keyCode == 40 && yPaddle2 < 700) { 
    yPaddle2 += 25; 
  }  
}
