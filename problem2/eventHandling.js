//problem2.js

//global variables
var speed = 2;         //speed of movement in px
var dx = speed;        //direction of x, initialized to start movement
var dy = 0;            //direciton of y
var currx = 0;         //current x position
var curry = 30;        //curernt y position
var startStop = 0;     //controls starting and stopping
var drawIncr = 50;    //controls the time in ms for when the line is drawn
var timeInterval;      //controls the interval in which the line is drawn

//starts drawing the line
function drawLine(){
  //increment startStop
  startStop++;

  //if if startStop is not divisible by 2
  if(startStop%2){
    //change value of btnStartStop to Stop
    document.getElementById("btnStartStop").textContent = "Stop";

    //draw line forever
    timeInterval = setInterval(drawForever, drawIncr);
  }
  else{
    //change value of btnStartStop to Start
    document.getElementById("btnStartStop").textContent = "Start";

    //stop drawing the line
    clearInterval(timeInterval);
  }
}

//function that actually paints the line
function drawForever(){
  //document.getElementById("btnStartStop").value= "Stop";
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";

  //start the line and move the beginning of the path to the current spot
  ctx.beginPath();
  ctx.moveTo(currx, curry);

  //increment the current spot
  currx += dx;
  curry += dy;

  //set the end point and width of the line
  ctx.lineTo(currx, curry);
  ctx.lineWidth = 5;

  //draw the line as a red line
  ctx.strokeStyle = '#ff0000';
  ctx.stroke();
}

//changes line direction to the left
function switchLeft(){
  //if we have started, then you can change directions
  if(startStop%2){
    //if moving to the right, go up
    if(dx == speed){
      dx = 0;
      dy = (-1*speed);
    }
    //if moving to the left, go down
    else if (dx == (-1*speed)) {
      dx = 0;
      dy = speed;
    }
    //if moving down, go right
    else if (dy == speed) {
      dx = speed;
      dy = 0;
    }
    //if moving up, go left
    else if (dy == (-1*speed)) {
      dx = (-1*speed);
      dy = 0;
    }
  }
}

//changes line direction to the right
function switchRight(){
  //if we have started, then you can change directions
  if(startStop%2){
    //if moving right, go down
    if(dx == speed){
      dx = 0;
      dy = speed;
    }
    //if moving left, go up
    else if (dx == (-1*speed)) {
      dx = 0;
      dy = (-1*speed);
    }
    //if moving down, go left
    else if (dy == speed) {
      dx = (-1*speed);
      dy = 0;
    }
    //if moving up, go right
    else if (dy == (-1*speed)) {
      dx = speed;
      dy = 0;
    }
  }
}
