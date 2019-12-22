import '../styles/styles.css'

if (module.hot) {
  module.hot.accept()
}

/* lesson example code below this line */

function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello, my nanme is " + this.name + " and my favorite color is " + this.favoriteColor + "!");
  }
}

let john = new Person("John Doe", "blue");
john.greet();


let jane = new Person("Jane Smith", "green");
jane.greet();