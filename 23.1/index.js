// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
console.log(this);
// Answer 1:
// print the global scop - undefined

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
  name: 'Timmy',
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// Answer 2:
// return undefind because it refrence to global scope.
//b.1)  greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
//
//b.2) this.name = Obj.name

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
//Answer 3
//prints the global this because of the const.

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//Answer 4
//prints the global this because arrow function .

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.

document.querySelector('.element').addEventListener(() => {
  console.log(this);
});
// Answer 5
// print undefined because arrow function take the global scope
//to fix that we need to change to declertion function.
