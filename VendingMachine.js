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
    this.row;
    this.column;

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
    this.inventoryCheck;
    this.fundsCheck;
    this.change = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.changeOwed = this.balance;
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
      this.row = button;
    } else if (typeof button === "number") {
      this.column = button;
    }

    if (this.row && this.column) {
      console.log(this.row, this.column);
    }
  }

  calculateChange() {
    while (this.changeOwed > 0) {
      if (this.changeOwed >= 500) {
        this.change[500] += 1;
        this.changeOwed -= 500;
      } else if (this.changeOwed >= 100) {
        this.change[100] += 1;
        this.changeOwed -= 100;
      } else if (this.changeOwed >= 50) {
        this.change[50] += 1;
        this.changeOwed -= 50;
      } else if (this.changeOwed >= 10) {
        this.change[10] += 1;
        this.changeOwed -= 10;
      }
    }
  }

  findProduct() {
    if (this.row == "A") {
      this.row = 0;
    } else if (this.row == "B") {
      this.row = 1;
    } else if (this.row == "C") {
      this.row = 2;
    } else if (this.row == "D") {
      this.row = 3;
    }
    let currentItem = this.inventory[this.row][this.column];

    if (currentItem.count > 0 && this.balance > currentItem.price) {
      this.purchasedProduct = currentItem.name;
      console.log(`Here is your product: ${this.purchasedProduct}`);

      currentItem.count--;

      this.balance = this.balance - currentItem.price;
      console.log(this.balance);
      this.changeOwed = this.balance;

      this.calculateChange();
    } else if (currentItem.count === 0) {
      this.inventoryCheck = false;
      console.log("Product Sold Out");
    } else {
      this.fundsCheck = false;
      console.log("Insufficient Funds");
    }
  }
}

module.exports = VendingMachine;
