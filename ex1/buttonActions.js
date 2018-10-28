
var indexOfColor = 1;
function changeColor() {
  var colorArray = ['#FF6633', '#CC9999','#4D80CC'];
    //store
    sessionStorage.setItem("color", colorArray[indexOfColor]);
    // Retrieve
    document.getElementById("demo").style.backgroundColor = sessionStorage.getItem("color");

    if(++indexOfColor == colorArray.length){
      indexOfColor = 0;
    }
}
