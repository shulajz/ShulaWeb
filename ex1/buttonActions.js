
const INITIAL_COLOR = 0;
const colorArray = ['blue', 'red','orange','yellow'];
let indexOfColor = INITIAL_COLOR;
let weGotToEndOfTheArrayFlag = false;

function handleButtonAndImageStyles(){
   handleButtonColor();
   handleImageDisplay();
}

function handleButtonColor(){
  setButtonColor();
  if(++indexOfColor == colorArray.length){
    weGotToEndOfTheArrayFlag = true;
    indexOfColor = INITIAL_COLOR;
  }
}

function handleImageDisplay(){
  let noaImageElement = document.getElementById("noa-img");
  if(weGotToEndOfTheArrayFlag){
    noaImageElement.style.display = "block";
    weGotToEndOfTheArrayFlag = false;
  } else {
    noaImageElement.style.display = "none";
  }
}


//A function to start the array colors from the start
function restartArray() {
  indexOfColor = INITIAL_COLOR;
  handleButtonAndImageStyles();
}

//A function which sets the DOM
document.addEventListener("DOMContentLoaded", function(event) {
  handleButtonAndImageStyles();
});


function setButtonColor(){
  // setButtonColor
  let currentButtonColor = colorArray[indexOfColor];
  //store
  window.localStorage.setItem("color", currentButtonColor);
  // Retrieve
  document.getElementById("buttonID").style.backgroundColor = window.localStorage.getItem("color");;
}
