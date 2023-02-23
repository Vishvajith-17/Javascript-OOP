console.log("---abstraction---")
function CircleAbs(radius){
    let location1 = {
        x : 1,
        y : 2
    } //let is private
    this.radius = radius;

    let computeLocation = function(factor){
        //
    }

    this.draw = function(){
        computeLocation(0.5);
        console.log("draw circle " + radius + " with constructor function");
    }

    //getter and setters
    Object.defineProperty(this, 'location1', {
        get : function(){
            return location1;
        },
        set : function(value){
            if(!value.x || !value.y){
                throw new Error("Invalid location")
            }
            location1 = value;
        }
    });
};

const circleabs = new CircleAbs(6);
//now only accesible public ones 
circleabs.draw();
//getters
circleabs.location1;
//setters
circleabs.location1 = {x:6, y:7};
