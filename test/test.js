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
    expect(machine.rowSelection).to.equal("D");
  });
  it("should save number when selected", () => {
    const machine = new VendingMachine();

    machine.pressButton(3);

    expect(machine.columnSelection).to.equal(3);
  });
  it("should exist inventory when program starts", () => {
    const machine = new VendingMachine();

    expect(machine.inventory).to.exist;
  });
  it("should select an item", () => {
    const machine = new VendingMachine();

    machine.pressButton("A");
    machine.pressButton(0);
    machine.findProduct();

    expect(machine.purchasedProduct).to.equal("Barbecue Chips");
  });
  it("should reduce product count by 1 when purchased", () => {
    const machine = new VendingMachine();

    machine.pressButton("B");
    machine.pressButton(1);
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
});
