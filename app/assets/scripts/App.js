import '../styles/styles.css'
import Person from './modules/Person'

if (module.hot) {
  module.hot.accept()
}

/* lesson example code below this line */
class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes zero taxes.");
  }
}


let john = new Person("John Doe", "purple");
john.greet();


let jane = new Adult("Jane Smith", "pink");
jane.greet();
jane.payTaxes();