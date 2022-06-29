function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const circle = new Circle(10);

// now we will add property into Circle object
circle.location = { x: 1 };      // this is one way
circle['location'] = { x: 1 };   // this is another way

const propertyName = 'location';
circle[propertyName] = { x: 1 };    // this is another way

delete circle[location];         // deleting this property