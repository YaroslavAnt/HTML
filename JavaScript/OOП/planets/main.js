
function Planet(name, radius, speed, size){
	this.position=Math.floor(Math.random()*360);
	this.planet=document.getElementById(name);
	this.radius=radius;
	this.speed=speed;
	this.size=size;
	this.planet.style.height=this.size+'px';
}
Planet.prototype={
	move: function(){
		var self=this;
		setInterval(function(){
			self.step();
		}, 10)
	},
	step: function(){
		this.position+=this.speed;		
		this.planet.style.left=this.radius*Math.cos(this.position*Math.PI/180)+(centerX-this.size/2+75)+"px"
		this.planet.style.top=this.radius*Math.sin(this.position*Math.PI/180)+(centerY-this.size/2+75)+"px"
	}
};

var mercury=new Planet('mercury', 100, 0.5, 50);
var venus=new Planet('venus', 120, 0.35, 40);
var earth=new Planet('earth', 150, 0.3, 45);
var mars=new Planet('mars', 170, 0.24, 30);
var jupiter=new Planet('jupiter', 200, 0.13, 80);
var saturn=new Planet('saturn', 270, 0.1, 120);
var uranus=new Planet('uranus', 320, 0.06, 50);
var neptune=new Planet('neptune', 350, 0.1, 50);

var centerX=250;
var centerY=250;

mercury.move();
venus.move();
earth.move();
mars.move();
jupiter.move();
saturn.move();
uranus.move();
neptune.move();