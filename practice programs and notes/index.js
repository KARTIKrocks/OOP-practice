// objects literals

// const circle = {                      // here we created an object
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function () {
//     console.log('draw');
//   }
// };

// circle.draw();


// function createCircle(radius) {              // but using methods we can create multiple objects
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     }
//   };
// }

// const circle = createCircle(1);
// circle.draw();


// 09
// Factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     }
//   };
// }

// const circle = createCircle(1);

// // Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }
// }

// const another = new Circle(1)


// 10

// 12 value vs reference
// let x = { value: 10 };
// let y = x;

// x.value = 20;

// let number = 10;
// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number); // output is 10,bcoz it is value

// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }

// increase(obj);
// console.log(obj); // output is 11,bcoz it is reference



// 13 adding or removing properties

// function Circle(redius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }
// }

// const circle = new Circle(10);
// circle.location = {x:1};


// const propertyName='center location';
// circle
// circle[propertyName] = {x:1};

// delete circle['location'];




// 15 Abstraction

function Circle(radius) {  
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {

  }

  this.draw = function () {
    this.computeOptimumLocation(0.1);

    console.log('draw');
  }
}

const circle = new Circle(10);
circle.draw();