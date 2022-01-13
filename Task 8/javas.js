/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {

    this.read = function() {
      this.a = +prompt('First value', 0);
      this.b = +prompt('Second value', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };

    this.substraction = function(){
        return this.a - this.b;
    }
  
    this.multiplication = function() {
      return this.a * this.b;
    };

    this.division = function() {
        return this.a / this.b;
      };
  }
  
  let calculator = new Calculator();
  calculator.read();

  // Veiksmų atsakymai įdėti į alertus
  
  alert( "Sum = " + calculator.sum() );
  alert( "Substraction = " + calculator.substraction() );
  alert( "Multipication = " + calculator.multiplication() );
  alert( "Division = " + calculator.division() );


  