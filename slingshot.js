class Chain{
    constructor(bodyA,pointB) {
        var options={
            bodyA:bodyA,
            pointB:pointB,

            stiffness:0.2,
            length:10
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);

        this.sling1=loadImage('sprites/sling1.png');
        this.sling2=loadImage('sprites/sling2.png');
        this.sling3=loadImage('sprites/sling3.png');
    }fly(){

        this.chain.bodyA=null;
    }
    display(){

        

        if (this.chain.bodyA !=null){
            strokeWeight(5)
            stroke(48,22,8);
        //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        
            if(this.chain.bodyA.position.x<230){
                line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,220,80)
                line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,260,80);
                image(this.sling3,this.chain.bodyA.position.x-25,this.chain.bodyA.position.y-10)
            }
            else{
                line(this.chain.bodyA.position.x+20,this.chain.bodyA.position.y,220,80)
                line(this.chain.bodyA.position.x+20,this.chain.bodyA.position.y,260,80);
                image(this.sling3,this.chain.bodyA.position.x+25,this.chain.bodyA.position.y-10)
            }

        }
        
        image(this.sling1,230,50);
        image(this.sling2,200,50);        
        

    }
    attach(){
        Matter.Body.setPosition(bird.body,{x:230,y:100})
        this.chain.bodyA=bird.body;
    }
}