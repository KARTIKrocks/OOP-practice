function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}


// const Circle = new 
// Function('radius',`
// this.radius = radius;
// this.draw = function(){
//   console.log('draw');
// }
// `);
// const circle = Circle(1);


Circle.call({}, 1);
Circle.apply({},[1,2,3]); 
const another = new Circle(1);