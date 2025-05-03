use mydb;
db.createCollection('inventory');

db.inventory.insertMany([
  {
    item: "pears",
    qty: 100,
    price: 0.70
  },
  {
    item: "apples",
    qty: 150,
    price: 1.00
  },
  {
    item: "bananas",
    qty: 120,
    price: 0.80
  },
  {
    item: "plums",
    qty: 85,
    price: 1.20
  },
  {
    item: "papayas",
    qty: 60,
    price: 1.10
  },
  {
    item: "grapes",
    qty: 90,
    price: 2.00
  },
  {
    item: "oranges",
    qty: 130,
    price: 1.30
  }
]);
