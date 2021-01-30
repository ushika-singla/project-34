class Monster{
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
            restitution:0.1,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Monster-01.png");
    }
    display(){

    push();
    Translate(pos.x,pos.y);
    rotate(angle)
    rectMode(CENTER);
    rect(this.image,0,0,this.width,this.height);
    pop();

    }
}