console.log("---Object---");
//object define with literals
const circle = {
    radius : 4,
    location : {
        x_cordinate : 3,
        y_cordinate : 3,
    },
    color : "red",
    draw : function(radius){
        console.log("draw circle " + radius + " with literal");
    }
};

circle.draw(5);

//object define with factory function (better)
function createCircle(radius){
    return {
        radius : radius,
        draw : function(){
            console.log("draw circle " + radius + " with factory function")
        }
    }
};

const newCircle = createCircle(2);
newCircle.draw();

//object define with constructor (better)
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw circle " + radius + " with constructor function");
    }
};

const constructorCircle = new Circle(4);
constructorCircle.draw();

//also can call like this 
Circle.call({}, 4)
Circle.apply({}, [3]);

//****in javascript functions are objects//



