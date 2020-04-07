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
    this.columnSelection;

    const item1 = { name: "Barbecue Chips", price: 150, count: 5 };
    const item2 = { name: "Salt and Seaweed chips", price: 120, count: 6 };
    const item3 = { name: "Canned Corn Soup", price: 200, count: 11 };
    const item4 = { name: "KitKat", price: 130, count: 0 };
    const item5 = { name: "Beer", price: 210, count: 0 };
    const item6 = { name: "M&M's", price: 250, count: 7 };
    const item7 = { name: "Chocolate", price: 170, count: 10 };
    const item8 = { name: "Pretzels", price: 140, count: 7 };
    const item9 = { name: "Boba Milk Coffee", price: 300, count: 5 };
    const item10 = { name: "Super Black Coffee", price: 100, count: 4 };
    const item11 = { name: "Decaf Coffee", price: 100, count: 7 };
    const item12 = { name: "Coffee", price: 250, count: 10 };
    const item13 = { name: "Grape Juice", price: 120, count: 8 };
    const item14 = { name: "Apple Juice", price: 150, count: 10 };
    const item15 = { name: "Orange Juice", price: 100, count: 3 };
    const item16 = { name: "Dragonfruit Juice", price: 250, count: 7 };

    this.inventory = [
      [item1, item2, item3, item4],
      [item5, item6, item7, item8],
      [item9, item10, item11, item12],
      [item13, item14, item15, item16],
    ];

    this.purchasedProduct;
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
    if (typeof button === "string") {
      this.rowSelection = button;
    } else if (typeof button === "number") {
      this.columnSelection = button;
    }

    if (this.rowSelection && this.columnSelection) {
      console.log(this.rowSelection, this.columnSelection);
    }
  }

  findProduct() {
    if (this.rowSelection == "A") {
      this.rowSelection = 0;
    } else if (this.rowSelection == "B") {
      this.rowSelection = 1;
    } else if (this.rowSelection == "C") {
      this.rowSelection = 2;
    } else if (this.rowSelection == "D") {
      this.rowSelection = 3;
    }

    this.purchasedProduct = this.inventory[this.rowSelection][
      this.columnSelection
    ].name;
    console.log(`Here is your product: ${this.purchasedProduct}`);

    this.inventory[this.rowSelection][this.columnSelection].count--;

    this.balance =
      this.balance -
      this.inventory[this.rowSelection][this.columnSelection].price;
    console.log(this.balance);
  }
}

// const ourMachine = new VendingMachine();

// console.log(ourMachine.insertCoin(100));
// console.log(ourMachine.balance);
// console.log(ourMachine.till);
// ourMachine.pressButton("D");
// ourMachine.pressButton(3);
// console.log(ourMachine.rowSelection);
// console.log(ourMachine.inventory[0][0]);

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
