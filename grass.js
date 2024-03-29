function bar () {

var canvas   = document.getElementById('pasto'),
    ctx      = canvas.getContext('2d'),
    stack    = [],
    w        = window.innerWidth,
    h        = window.innerHeight;
	var colors = ["grey","lightgrey"];
var drawer = function(){
  // ctx.fillStyle="#ffffff";
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="rgba(0, 0, 0, 0)";
  ctx.fillRect(0,0,w,h);
  stack.forEach(function(el){
      el();
  })
  requestAnimationFrame(drawer);
}
var anim = function(){
  var x = 0, y = 0;
  // var maxTall = Math.random()*100+200;
  var maxTall = Math.random()*50+150;
  // var maxSize = Math.random()*10+5;
  var maxSize = Math.random()*.1+.5;
  var speed = Math.random()*2;  
  var position = Math.random()*w-w/2;
  var c = function(l,u){return Math.round(Math.random()*(u||255)+l||0);}
  // var color = 'rgb('+c(60,10)+','+c(201,50)+','+c(120,50)+')';
  var color = colors[Math.floor(Math.random() * colors.length)];
  return function(){
    var deviation=Math.cos(x/30)*Math.min(x/40,50),
        tall = Math.min(x/2,maxTall),
        size = Math.min(x/50,maxSize);
        // size = Math.min(x,maxSize);
    x+=speed;
    ctx.save();
    ctx.strokeWidth=10;
    ctx.translate(w/2+position,h)
    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.lineTo(-size,0);
    ctx.quadraticCurveTo(-size,-tall/2,deviation,-tall);
    ctx.quadraticCurveTo(size,-tall/2,size,0);
    ctx.fill();
    ctx.restore();
  }    
};
for(var x = 0; x<3000;x++){stack.push(anim());}
canvas.width = w;
canvas.height = h;
drawer();
}

bar();
