//var canvas = document.getElementById('grass');
var grass = 90;
//var colors = ["green", "darkgreen", "olive"];
//var colors = ["black","grey","dimgrey"];
//var colors = ["grey","dimgrey","lightgrey"];
var colors = ["grey","lightgrey"];
//var colors = ["lightgrey"];
//colors = ["black"];
function addGrass() {
	for (var i = 10; i < grass; i+=0.1) {
		var t = document.createElement("div");
		t.className = "grass";
		//t.style.height = Math.random() * 5 + 10 + "%";
		t.style.height = Math.random() * 10 + 5 + "%";
		t.style.left = i + "%";
		//t.style.width = Math.random() * 1.5 + 0.5 + "vw";
		t.style.width = 0.005 + "vw";
		t.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		t.style.animationDelay = Math.random() * 2 + "s";
		t.style.zIndex = (i % 2 === 0 ? -1 : 1) - 4;
		document.body.appendChild(t);
	}
}
addGrass();

//Copyright (c) 2022 by Kit Jenson (https://codepen.io/kitjenson/pen/JjWPLyg)
//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.