use C3649C;
db.dropDatabase();
db.createCollection('inventory');
db.createCollection('Orders');
db.inventory.insertMany([
  {
    inventID: "I0001",
    item: "pears",
    qty: 100,
    price: 0.70
  },
  {
    inventID: "I0002",
    item: "apples",
    qty: 150,
    price: 1.00
  },
  {
    inventID: "I0003",
    item: "bananas",
    qty: 120,
    price: 0.80
  },
  {
    inventID: "I0004",
    item: "plums",
    qty: 85,
    price: 1.20
  },
  {
    inventID: "I0005",
    item: "papayas",
    qty: 60,
    price: 1.10
  },
  {
    inventID: "I0005",
    item: "grapes",
    qty: 90,
    price: 2.00
  },
  {
    inventID: "I0006",
    item: "oranges",
    qty: 130,
    price: 1.30
  }
]);




db.Orders.insertMany([
  { Order_Date: new Date("2024-05-01"), inventID: "I0001", order_Qty: 20 },
  { Order_Date: new Date("2024-05-03"), inventID: "I0001", order_Qty: 25 },
  
  { Order_Date: new Date("2024-05-01"), inventID: "I0002", order_Qty: 30 },
  { Order_Date: new Date("2024-05-04"), inventID: "I0002", order_Qty: 40 },
  { Order_Date: new Date("2024-05-07"), inventID: "I0002", order_Qty: 35 },

  { Order_Date: new Date("2024-05-02"), inventID: "I0003", order_Qty: 22 },
  { Order_Date: new Date("2024-05-05"), inventID: "I0003", order_Qty: 26 },

  // Skipping plums (I0004)

  { Order_Date: new Date("2024-05-03"), inventID: "I0005", order_Qty: 18 },
  { Order_Date: new Date("2024-05-06"), inventID: "I0005", order_Qty: 21 },

  // Note: "grapes" also uses I0005, so reuse or update as needed
  { Order_Date: new Date("2024-05-02"), inventID: "I0005", order_Qty: 27 },

  { Order_Date: new Date("2024-05-01"), inventID: "I0006", order_Qty: 32 },
  { Order_Date: new Date("2024-05-05"), inventID: "I0006", order_Qty: 29 },
  { Order_Date: new Date("2024-05-08"), inventID: "I0006", order_Qty: 34 }
]);
