class launcher
{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch); 
        this.pointB = pointB
    }

    attach(body){
        this.launch.bodyA = body 
    }

fly(){
    this.launch.bodyA= null
}
    display(){
        if (this.launch.bodyA) {
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}