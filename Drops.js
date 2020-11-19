class Drops {  
    constructor(x, y, radius){
        var options = {
            //'restitution':0.2,
            'friction':0.1,
            //'density':1.2,
            'isStatic': false
        }
         this.radius = radius;
        this.rain = Bodies.circle(x, y, radius, options);
	    World.add(world, this.rain);
   }

    update(){
        if(this.rain.position.y > height){
           Matter.Body.setPosition(this.rain,{x:random(0, 400), y:random(0, 400)});
        }
    }

   display(){
    fill(rgb(19, 11, 88));
    ellipseMode(RADIUS);
    ellipse(this.rain.position.x, this.rain.position.y, this.radius);
   }
}
