
const INITIAL_COLOR = 0;
let indexOfColor = INITIAL_COLOR;
let colorArray = ['blue', 'red','orange', 'yellow'];

//A function that changes the color of button on every click
//If we got to the last color then an image will appear.
function changeColor() {
    let weGotToEndOfTheArrayFlag = false;
    setButtonColor();
    if(++indexOfColor == colorArray.length){
      weGotToEndOfTheArrayFlag = true;
      indexOfColor = INITIAL_COLOR;
    }
    handleImage(weGotToEndOfTheArrayFlag);
}

function handleImage(weGotToEndOfTheArrayFlag){
  let noaImageElement = document.getElementById("noa-img");
  if(weGotToEndOfTheArrayFlag){
    noaImageElement.style.display = "block";
  } else {
    noaImageElement.style.display = "none";
  }
}


//A function to start the array colors from the start
function restartArray() {
  indexOfColor = INITIAL_COLOR;
  setButtonColor();
  document.getElementById("noa-img").style.display = "none";
  indexOfColor++;

}

//A function which sets the first color of the button on start
document.addEventListener("DOMContentLoaded", function(event) {
  let noaImageElement = document.getElementById("noa-img");
  noaImageElement.style.display = "none";
  setButtonColor();
  indexOfColor++;
});


function setButtonColor(){
  // setButtonColor
  let currentButtonColor  = colorArray[indexOfColor];
  //store
  window.localStorage.setItem('color', currentButtonColor);
  // Retrieve
  document.getElementById("demo").style.backgroundColor = currentButtonColor;
}
