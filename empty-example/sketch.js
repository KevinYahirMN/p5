function Circulo(v2,v1,fill)
{
this.v1 = v1; 
this.v2 = v2;
this.fill = fill;

this.dibuja = function()
{
  ellipse(this.v1.x,this.v1.y, this.v2.x, this.v2.y, fill);
}

}

var vect1 = CreateVector(80,80);
var vect2 = CreateVector(150,150);
var Circulo1 = new Circulo(vect1,vect2,color(245,235,23));

function setup() {
  // put setup code here
  createCanvas(1000, 1000);

}

function draw() {
  // put drawing code here let c = color (255, 204, 0) if (mouseIsPressed) {  fill(c)} else {   fill(255);}triangle(mouseX, mouseY, 80, 80,200,200);

Circulo.dibuja();
}
