
var i = 1;
function changeColor() {
  var colorArray = ['#FF6633', '#CC9999','#4D80CC'];
    //store
    sessionStorage.setItem("color", colorArray[i]);
    // Retrieve
    document.getElementById("demo").style.backgroundColor = sessionStorage.getItem("color");
    i++;
    if(i == colorArray.length){
      i = 0;
    }
}
