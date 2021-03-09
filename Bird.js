class Bird 
 {
     constructor(x,y,radius)
{
    var options=
    {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius;
    
    this.image = loadAnimation("Images/b1.jpg","Images/b2.jpg","Images/b3.jpg","Images/b4.png"); 
}
      
 display()
{
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius);
    pop();       
}
     
}