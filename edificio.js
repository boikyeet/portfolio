var a = document.getElementById("edificio");
// var b = document.getElementById("col2")
var b = document.querySelectorAll('#empot-svg');
var bArray = [...b];

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener("load",function(){
	var svgDoc = a.contentDocument;
	// lines = svgDoc.querySelectorAll('[stroke="black"]:not(#marco > line)');
	var lines = svgDoc.querySelectorAll('[stroke="black"]');
	// paths = svgDoc.querySelectorAll("#Columna\\ 3 > #Group\\ 12_2 > path");
	// console.log(lines);
	for(var i=0; i<lines.length; ++i) {
		// lines[i].style.stroke = "red";
		lines[i].style.filter = "drop-shadow( 2px 2px 2px rgba(0, 0, 0, .3))";
	}
	var marco = svgDoc.querySelectorAll('#marco > line');
	for(var i=0; i<marco.length; ++i) {
		marco[i].setAttribute("stroke-width","1px");
	}
	// var base = svgDoc.querySelector('#Rectangle\\ 50_2');
	// base.setAttribute("stroke","red");
	// base.style.stroke = "red";
}, false);

bArray.forEach(elemento => {
elemento.addEventListener("load",function(){
	var svgDoc = elemento.contentDocument;
	var empot = svgDoc.querySelectorAll('[stroke="black"], [fill="black"]');
	for(var i=0; i<empot.length; ++i) {
		empot[i].style.filter = "drop-shadow( 2px 2px 1px rgba(0, 0, 0, .3))";
		// empot[i].style.stroke = "red";
	}
}, false);
});
