class Ball {

	constructor(x,y, angle){
		    this.x = x;
    		this.y = y;
        this.angle = angle;
	}

	drawTriangle(){  // draw a triangle on the screen at x,y
    		stroke(0);
    		fill("red");
        push();//save canvas state
        translate(this.x,this.y); //translate to this.x, this.y
        rotate(this.angle/PI); // rotate
        triangle(0, 0, 10, -20, 20, 0); // draw the triangle at 0,0- because you've moved the center
        pop(); // pop back to normal
	}

  score(){
         if (this.x >= 555 && this.x <= 645 && this.y <= 150 && this.y>= 145){
             points = points + 3;

                if (points >= savedpoints) {
             localStorage.setItem('points', points);
          }
         }
       }

  drawBall(){  // draw a football on the screen at x,y
    		stroke(0);
        strokeWeight(1);
    		fill(135, 67, 8);
		    ellipse(this.x,this.y,21,33);
        stroke(0);
        strokeWeight(0.5);
        line(this.x,this.y+16.5,this.x,this.y-16.5);
        stroke(255);
        strokeWeight(1.5);
        line(this.x,this.y+6,this.x,this.y-6);
        strokeWeight(1);
        line(this.x+2,this.y+6,this.x-2,this.y+6);
        line(this.x+2,this.y+4,this.x-2,this.y+4);
        line(this.x+2,this.y+2,this.x-2,this.y+2);
        line(this.x+2,this.y,this.x-2,this.y);
        line(this.x+2,this.y-2,this.x-2,this.y-2);
        line(this.x+2,this.y-4,this.x-2,this.y-4);
        line(this.x+2,this.y-6,this.x-2,this.y-6);
	}

  aimLeft(){ //change the trajectory angle
    this.angle = this.angle - 1;
    print(this.angle);
  }

  aimRight(){ //change the trajectory angle
    this.angle = this.angle+1;
    print(this.angle);
  }

	kickBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.angle;
		this.y = this.y-5;
	}
}
