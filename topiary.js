function foo() {

var c = document.getElementById('arbol');
var $ = c.getContext('2d');
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
// var h = c.height = w;
// var w = window.addEventListener('resize', setEqualWidth);
// var h = window.addEventListener('resize', setEqualHeight);
var w2 = w* 0.5;
// var w2 = w;
var h2 = h * 0.5;
var ŭ = 0;
var topiary = new branch(110, 0, 0);
var cnt = 0;

function anim(){
	cnt++;
  ŭ-=.5;
  	if (cnt%2) {
      draw();
    }
 window.requestAnimationFrame(anim);
}
anim();

function draw() {
    $.save();
    $.clearRect(0, 0, w, h);
    // $.translate(w2, h*0.98);
    // $.translate(w2*1.4, h);
    $.translate(w2, h);
    $.rotate(-Math.PI * 0.5);
    topiary.disp($);
    $.restore();
}

function branch(len, ang, gen){
    this.len = len;
    this.ang = ang;
    this.gen = gen;
    this.limb = [];
    this.sway = 0;
    this.mult = rnd(0.0001, 0.001);
    this.spawn = 0;
    this.vel =0;
    
    if(gen < 7){
    	this.limb.push(new branch(len*rnd(0.8, 0.99), 
      rnd(0, Math.PI/6), this.gen+1));
    	this.limb.push(new branch(len*rnd(0.8, 0.99), 
      rnd(0, -Math.PI/6), this.gen+1));
    }
    
    this.disp = function($){
    	  this.sway++;  
        $.save(); 
        this.vel *= .9;
        var dif = 1-this.spawn;
        this.vel += (dif*0.01);
        this.spawn += this.vel;
        
        // $.strokeStyle = "hsla(" + (ŭ % 360) + ",100%,50%,1)";
        //$.strokeStyle = "hsla(0,100%,50%,1)";
        $.lineWidth = .5;
        $.beginPath();
        $.rotate(this.ang + (Math.sin(this.sway*this.mult)*Math.PI/128));
        $.moveTo(0, 0);
        $.lineTo(this.len * this.spawn, 0);
        $.stroke();
        
        $.translate(this.len * this.spawn, 0);
        
        if(this.spawn > 0.6){
            for(var i = 0; i < this.limb.length; i++){
            	var limb = this.limb[i];
                limb.disp($);
            }
        }
        $.restore();
    };
}

function rnd(min, max){
	return Math.random()*(max - min) + min;
}
}

foo();

//Copyright (c) 2022 by Tiffany Rayside (https://codepen.io/tmrDevelops/pen/KwBzpM)
//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
