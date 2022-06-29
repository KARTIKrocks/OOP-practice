function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  };
}
const circle = new Circle(10);

// Objects created by given constructor will have same prototype.

let myArray = [];
// myArray derives from arrayBase, and arrayBase derives from objectBase. this is multilevel inheritance.