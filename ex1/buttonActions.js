
var indexOfColor = 1;
var colorArray = ['blue', 'red','orange', 'yellow'];
//A function that changes the color of button on every click
//If we got to the last color then an image will appear.
function changeColor() {
    setTheColor(indexOfColor);
    var noaImage = document.getElementById("noaIMG");
    if(++indexOfColor == colorArray.length){
      indexOfColor = 0;
      noaImage.style.display = "block";
    } else {
       noaImage.style.display = "none";
    }
}

//A function to start the array colors from the start
function restartArray() {
  indexOfColor = 0;
  setTheColor(indexOfColor);
  document.getElementById("noaIMG").style.display = "none";
  indexOfColor++;

}

//A function which sets the first color of the button on start
document.addEventListener("DOMContentLoaded", function(event) {
  setTheColor(indexOfColor-1);
});

//A function we call from other functions in
// order to actually set the color of button
function setTheColor(indexForArray){
  //store
  window.localStorage.setItem("color", colorArray[indexForArray]);
  // Retrieve
  document.getElementById("demo").style.backgroundColor = window.localStorage.getItem("color");
}
