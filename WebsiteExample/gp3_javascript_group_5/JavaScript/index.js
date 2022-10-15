//////////////////////////////////////////////////////////////////////
// Author: Michael Girsberger, George Bjork, Caleb Flegel
// Purpose: Our main javascript file to control our game
// Resources Used:
//  Parts of code adapted from code by Professor Kent Jones
// License: MIT License: https://opensource.org/licenses/MIT
///////////////////////////////////////////////////////////////////////

let button = document.getElementById("strtBttn")
button.addEventListener ("click", function ($) {
  button.style.visibility="hidden";
  var position = 0;
  var speed = -12;
  // Create an image element for triceratops
  var $dino = $("<img/>");
  //$dino.addClass("gameImage");
  $dino.attr({
    alt: "Triceratops",
    id: "Triceratops",
    src: "../CSS/IMG/Triceratops.gif",
  });
  $("div#Triceratops-div").empty().append($dino);
  // Rover Obstacle
  // var $rover_obstacle = $('<img/>');
  // $rover_obstacle.attr({'alt' : 'roverObstacle', 'id' : 'roverObstacle', 'src' : '../CSS/IMG/roverObstacle.png', 'width' : '100%'});
  // $('div#Rover').empty().append($rover_obstacle);
  // Astroid Obstacle
  // var $Astroids = $('<img/>');
  // $Astroids.attr({'alt' : 'Astroid', 'id' : 'Astroids', 'src' : '../CSS/IMG/Astroid.png'});
  // $('div#Astroid').empty().append($Astroids);
  //background
  var $back = $("div#Background");
  //Score ticker function
  var score = 0;
  setInterval(function () {
    score++;
    document.getElementById("score").innerHTML = score;
  }, 100);
  // Function that will setup an animation frame
  var requestAnimFrame = (function () {
    if (window.requestAnimationFrame) return window.requestAnimationFrame;
    if (window.webkitRequestAnimationFrame)
      return window.webkitRequestAnimationFrame;
    if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame;
    if (window.oRequestAnimationFrame) return window.oRequestAnimationFrame;
    if (window.msRequestAnimationFrame) return window.msRequestAnimationFrame;
    else
      return function (callback, element) {
        window.setTimeout(callback, element);
      };
  })();
  // Our main function for controlling the dino.
  // clicking anywhere on the screen makes the dino jump
  $("body").click(function () {
    var elem = document.getElementById("Triceratops-div");
    var pos = 0;
    var pos2 = 350;
    var id2 = setInterval(moveUp, 10);
    function moveDown() {
      //dino jumps down
      console.log("down");
      if (pos === 325) {
        clearInterval(id2);
      } else {
        pos += 5;
        elem.style.top = pos + "px";
      }
    }
    function moveUp() {
      //dino jumps up
      console.log("UP");
      if (pos2 === 0) {
        clearInterval(id2);
        var id = setInterval(moveDown, 10);
      } else {
        pos2 -= 5;
        elem.style.top = pos2 + "px";
      }
    }
  });
  function draw() {
    requestAnimFrame(draw, 25);
    //Trying to move rover
    $("div#Rover").css("background-position", position * (3.25 / 5.0));
    //Trying to move astroid
    $("div#Astroid").css("background-position", position * (1.0 / 3.0));
    //Trying to move planets
    $("div#Planets").css("background-position", position * (1.0 / 6.0));
    //Trying to move moon
    $("div#Moon").css("background-position", position * (3.25 / 5.0));
    //position of objects moving relative to the background
    position = position + speed;
    if (
      position * (1.0 / 12.0) <= -$back.width() ||
      position * (1.0 / 12.0) >= $back.width()
    ) {
      position = 0;
    }
  }
  draw();
})(jQuery);

