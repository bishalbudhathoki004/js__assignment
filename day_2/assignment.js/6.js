class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Product: ${this.name}, Price: RS ${this.price}`;
  }
}

class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);
    this.expiryDate = expiryDate;
  }

  getInfo() {
    return `${super.getInfo()}, Expiry Date: ${this.expiryDate}`;
  }
}

const laptop = new Product("Laptop", 150000);
const milk = new FoodProduct("Milk", 500, "2025-12-20");

console.log(laptop.getInfo());
console.log(milk.getInfo());