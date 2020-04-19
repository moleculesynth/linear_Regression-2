// https://www.youtube.com/watch?v=L-Lsfu4ab74
// https://github.com/CodingTrain/website/blob/master/Courses/intelligence_learning/session3/linear_regression_gradient_descent/sketch.js
var data = [];

var m = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  background(50);
}

function gradientDescent() {
  var learning_rate = 0.5;                    //rewatch video to learn what Shiffman says about this: speed of adjustments made to line
  for (var i = 0; i < data.length; i++) {     //look through all the data
    var x = data[i].x;                        //x value data point
    var y = data[i].y;                      //y value data point
    var guess = m * x + b;                  //machine learning recipe
    var error = y - guess;                  //error = actual - guess
    m = m + (error * x) * learning_rate;      //for every data point, change m and b to be more accurate
    b = b + (error) * learning_rate;
  
 
  function drawLine() {
    var x1 = 0;
    var y1 = m * x1 + b;
    var x2 = 1;
    var y2 = m * x2 + b;
    x1 = map(x1, 0, 1, 0, width);
    y1 = map(y1, 0, 1, height, 0);
    x2 = map(x2, 0, 1, 0, width);
    y2 = map(y2, 0, 1, height, 0);
    stroke (50, 255, 30);           //I corrected and simplified some things here
    line (x1,y1,x2,y2);
}

function mousePressed(){
    var x = map(mouseX, 0, width, 0, 1);
    var y = map(mouseY, 0 , height, 1, 0);
    var point = createVector(x,y);
    data.push(point);
}

function draw() {
background (51);
for (var i = 0; i < data.length; i++){
    var x = map(data[i].x, 0, 1, 0, width);
    var y = map(data[i].y, 0, 1, height, 0);
    fill (255);
    stroke(255);
    ellipse (x,y, 6, 6);
}
  if (data.length > 1) {
      gradientDescent();
      drawLine();
}
}
