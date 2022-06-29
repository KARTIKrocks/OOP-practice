function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log('move');
  }
}


const c1 = new Circle(1);                     // we can also  create object first and then modify prototype

// Prototype members
Circle.prototype.draw = function () {
  console.log('draw');
}

console.log(c1.draw());

// Return only instance members
console.log(Object.keys(c1));


// it will return instance members and prototype
for (let key in c1) {
  console.log(key);
}


// hasOwnProperty() will return true only for instance members
console.log(c1.hasOwnProperty('radius'), c1.hasOwnProperty('draw'));