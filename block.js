class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.8,
          friction :0.5,
          density:0.2
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      this.image= loadImage("corona.png")
      World.add(world, this.body);   
     }
    display(){
      if(this.body.speed < 8){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      stroke("black");
      rotate(angle);
     imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
         pop();
       }
       
      
    }
    score(){
      if(this.visibility < 0 && this.visibility > -1005){
        score++;
      }
}
}

