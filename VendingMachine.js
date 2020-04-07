// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

class VendingMachine {
  constructor(balance = 0) {
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.balance = balance;
    this.rowSelection;
  }

  calculateBalance() {
    let newBalance = Object.keys(this.till)
      .map((key) => {
        return this.till[key] * key;
      })
      .reduce((total, current) => {
        return total + current;
      });
    this.balance = newBalance;
  }

  insertCoin(coin) {
    this.till[coin] += 1;
    this.calculateBalance();
  }

  pressButton(button) {
    this.rowSelection = button;
    console.log(this.rowSelection);
  }
}

// const ourMachine = new VendingMachine();

// console.log(ourMachine.insertCoin(100));
// console.log(ourMachine.balance);
// console.log(ourMachine.till);
// ourMachine.pressButton("D");
// console.log(ourMachine.rowSelection);

/*
class Circle {
  constructor (radius) {
      this.radius = radius;
  }
  get area () {
      return Math.PI * this.radius * this.radius;
  }
  set area (n) {
      this.radius = Math.sqrt(n / Math.PI);
  }
}
*/
// var obj = { "10": 5, "50": 7, "100": 0, "500": 0 };
/* var result = Object.keys(obj).map(function(key) {
  return [Number(key), obj[key]];
});
result.map(innerArray =>{
  return innerArray[0] * innerArray[1]
}).reduce((total, current) =>{
  return total+current;
})

console.log(result);
*/
module.exports = VendingMachine;
