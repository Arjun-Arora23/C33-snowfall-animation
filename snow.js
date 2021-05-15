class Snow{
    constructor(){
this.image = loadImage("snow4.webp")

        var options ={
        'friction':1.0,
        'density':1.0,
        'restitution':1.0
        }
    }
display(){
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
}

}