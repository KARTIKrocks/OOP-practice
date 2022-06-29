//  let x = 10;
//  let y = x;

//  x = 20;

///////////////////////////////////

// let x = {value:10};
// let y = x;

// x.value = 20;

// Primitives are copied by their value
// Objects are copied by their reference

/////////////////////////////////////////

// let number = 10;
// function increase(number){                    // here the value of number is copied , so it is completely different from original number
//   number++;
// }
// increase(number);
// console.log(number);

///////////////////////////////////////////

let obj = {value:10};
function increase(obj){                    // here the address of obj is copied 
  obj.value++;
}
increase(obj);
console.log(obj);