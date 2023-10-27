// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 200 },
  banana: { price: 10, quantity: 50 },
  orange: { price:20, quantity: 300 },
};

// เริ่มเขียนโค้ดตรงนี้
let totalValue = 0;
for (const product in inventory) {
  totalValue += inventory[product].price * inventory[product].quantity;
}

console.log(`Total inventory value: ${totalValue} baht`);