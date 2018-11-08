
const INITIAL_COLOR = 0;
var indexOfColor = INITIAL_COLOR;
var colorArray = ['blue', 'red','orange', 'yellow'];
var color = window.localStorage.getItem("color");
//A function that changes the color of button on every click
//If we got to the last color then an image will appear.
function changeColor() {
    setTheColor();
    var noaImageElement = document.getElementById("noa-img");
    if(++indexOfColor == colorArray.length){
      indexOfColor = 0;
      noaImageElement.style.display = "block";
    } else {
       noaImageElement.style.display = "none";
    }
}

//A function to start the array colors from the start
function restartArray() {
  indexOfColor = 0;
  setTheColor();
  document.getElementById("noa-img").style.display = "none";
  indexOfColor++;

}

//A function which sets the first color of the button on start
document.addEventListener("DOMContentLoaded", function(event) {
  setTheColor();
  indexOfColor++;
});

//A function we call from other functions in
// order to actually set the color of button
function setTheColor(){
  var color = colorArray[indexOfColor];
  //store
  window.localStorage.setItem("color", color);
  // Retrieve
  document.getElementById("demo").style.backgroundColor = color;
}
