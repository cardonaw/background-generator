var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var randomBtn = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	//console.log(color1.value + color2.value);
	css.textContent = body.style.background + "   ||   color1= " + color1.value + " color2= " + color2.value + ";";
}

function getRandomColor() {
  var simbols = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += simbols[Math.floor(Math.random() * 16)];
    //console.log(color);
  }
  return color;
}

function randomGradient() {
 	color1.value = getRandomColor();
 	color2.value = getRandomColor();
 	setGradient();
}




css.textContent = body.style.background + "  ||  color1= " + color1.value + " color2= " + color2.value + ";";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomGradient);