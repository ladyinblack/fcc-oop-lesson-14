// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Remember to set the Constructor Property when Changing the Prototype</h1>`;

/** TODO:
 * Define the constructor property on the Dog prototype.
 *
 
 function Dog(name) {
   this.name = name;
 }
 
 // Only change code below this line
 Dog.prototype = {
   numLegs: 4,
   eat: function () {
     console.log('nom nom nom');
   },
   describe: function () {
     console.log('My name is ' + this.name);
   },
 };
 */

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};
