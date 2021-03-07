class Paper
{
	constructor(x,y,r)
	{
		this.x=x;
		this.y=y;
		this.r = r
		
		var options = {
         isStatic:false,
         restitution:0.3,
         friction:1.5,
         density:0.5

        }
		
		
     this.image = loadImage("paper.png")
		this.body=Bodies.circle(x,y,r/2,options)
		
		World.add(world, this.body)
		

	}
	display()
	{

		var paperPos = this.body.position


			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.body.angle)
			image(this.image,0,0,this.r,this.r);
			pop()

			
	}

}