class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		//this.dustbinWidth=200;
		//this.dustbinHeight=213;
		
		var options = {
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2
   
		   }



		this.image = loadImage("trashcangreen.png")
		this.dustbinRight = Bodies.rectangle(x,y,20,230,options)
		this.dustbinLeft = Bodies.rectangle(x+200,y,20,230,options)
		this.dustbinBottom = Bodies.rectangle(x+100,y+105,200,20,options)

		 this.rWidth = 20 
		 this.rHeight = 230

		
		 this.lWidth = 20 
		 this.lHeight = 230

		 
		 this.bWidth = 200
		 this.bHeight = 20


		World.add(world,this.dustbinRight)
		World.add(world,this.dustbinLeft)
		World.add(world,this.dustbinBottom)
		//World.add(world, this.body)
	}
	display()
	{
			
		//var dustbinPos = this.body.position
			var Posbottom = this.dustbinBottom.position
			var Posleft = this.dustbinLeft.position
			var Posright = this.dustbinRight.position

			push()
			translate( Posright.x,  Posright.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
		//	rect(0,0,this.rWidth,this.rHeight);
			pop()

			
			push()
			translate( Posleft.x,  Posleft.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
		//	rect(0,0,this.lWidth,this.lHeight);
			pop()

			push()
			translate( Posbottom.x,  Posbottom.y);
			imageMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			image(this.image,0,0-60,this.bWidth,this.bHeight+300);
			pop()

	}


}