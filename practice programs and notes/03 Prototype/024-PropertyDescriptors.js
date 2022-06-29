let person = { name: 'Mosh' };

for (let key in person) {
  console.log(key);
}

console.log(Object.keys(person));

/////////////////////////////////////////////////////////////
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);


///////////////////////////////////////////////////////////////
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
});
person.name = 'John'                          // we can not write object if writable is set to false
console.log(person);                       // we can not see object if enumerable is set to false
console.log(Object.keys(person));           // we can not see object if enumerable is set to false

delete person.name                   // we can not delete of configuration is set to false
console.log(person.name);