const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });
  it("should save letter when selected", () => {
    //Setup
    const machine = new VendingMachine();

    //Exercise
    machine.pressButton("D");

    //Assert
    expect(machine.row).to.equal("D");
  });
  it("should save number when selected", () => {
    const machine = new VendingMachine();

    machine.pressButton(3);

    expect(machine.column).to.equal(3);
  });
  it("should exist inventory when program starts", () => {
    const machine = new VendingMachine();

    expect(machine.inventory).to.exist;
  });
  it("should select an item", () => {
    const machine = new VendingMachine();

    machine.pressButton("A");
    machine.pressButton(0);
    machine.balance = 500;
    machine.findProduct();

    expect(machine.purchasedProduct).to.equal("Barbecue Chips");
  });
  it("should reduce product count by 1 when purchased", () => {
    const machine = new VendingMachine();

    machine.pressButton("B");
    machine.pressButton(1);
    machine.balance = 500;
    machine.findProduct();

    expect(machine.inventory[1][1].count).to.equal(6);
  });
  it("should have sufficient balance when making purchase", () => {
    const machine = new VendingMachine();

    machine.pressButton("C");
    machine.pressButton(2);
    machine.balance = 300;
    machine.findProduct();

    expect(machine.balance).to.equal(200);
  });
  it("should return an error message when there is no inventory", () => {
    const machine = new VendingMachine();

    machine.pressButton("B");
    machine.pressButton(0);
    machine.balance = 500;
    machine.findProduct();

    expect(machine.inventoryCheck).to.be.false;
  });
  it("should return an error message when funds are insufficient", () => {
    const machine = new VendingMachine();

    machine.pressButton("C");
    machine.pressButton(0);
    machine.balance = 200;
    machine.findProduct();

    expect(machine.fundsCheck).to.be.false;
  });
  it("should return a zero balance when initialized", () => {
    const machine = new VendingMachine();

    expect(machine.balance).to.equal(0);
  });
  it("should return correct change after purchase", () => {
    const machine = new VendingMachine();

    machine.pressButton("D");
    machine.pressButton(3);
    machine.balance = 500;
    machine.findProduct();

    expect(machine.change).to.equal({ 10: 0, 50: 1, 100: 2, 500: 0 });
  });
});
