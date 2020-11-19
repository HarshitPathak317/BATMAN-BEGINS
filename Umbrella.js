class Umbrella {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.circle(x,y,50,options);
      this.image = loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
      this.image.scale = 0.7;
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,200,400,500,600)
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };