class Superhero{

    constructor(x,y,width,height){

        var options = {
            isStatic:false,
            restituition:0,
            friction:1,
            density:1.2

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero-01.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
  var pos = this.body.position;

    push();
    Translate(pos.x,pos.y);
    rotate(angle)
    rectMode(CENTER);
    rect(this.image,0,0,this.width,this.height);
    pop();

    }
}