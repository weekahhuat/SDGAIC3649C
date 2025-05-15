/*
This is a replication of creating of Inventory and adding records and collections
In this case, I had used Inventory2 as the database instead
*/
use Inventory2;

/*
You do not need this in the exercise.
It is added so that it re-initialize the database everytime the script is run
*/ 
db.dropDatabase();

//Exercise 1 Task 1
 db.createCollection("Product");


db.createCollection("Product_Category");

//Exercise 1 Task 2
db.Product_Category.insertOne( {"_id": "PC00001", "Cat_Desc": "Electronic"});
db.Product_Category.insertOne( {"_id": "PC00002", "Cat_Desc": "Furniture"}); 
db.Product_Category.insertOne( {"_id": "PC00003", "Cat_Desc": "Apparel"});

//Exercise 1 Task 3a
db.Product.insertMany([
  {
    "productName": "Gaming Laptop",
    "price": 1800,
    "description": "High-performance gaming laptop with RTX graphics",
    "Product_Cat": "PC00001",
    "Qty": 75
  },
  {
    "productName": "Smartphone",
    "price": 899,
    "description": "Latest model smartphone with AMOLED display",
    "Product_Cat": "PC00001",
    "Qty": 120
  },
  {
    "productName": "Wireless Earbuds",
    "price": 129,
    "description": "Bluetooth earbuds with noise cancellation",
    "Product_Cat": "PC00001",
    "Qty": 100
  }
])
//Exercise 1 Task 3b
db.Product.insertMany([
{
    "productName": "Leather Sofa",
    "price": 2500,
    "description": "Premium leather 3-seater sofa",
    "Product_Cat": "PC00002",
    "Qty": 65
  },
  {
    "productName": "Dining Table Set",
    "price": 1100,
    "description": "Solid wood dining table with 6 chairs",
    "Product_Cat": "PC00002",
    "Qty": 85
  },
  {
    "productName": "Office Chair",
    "price": 320,
    "description": "Ergonomic mesh office chair",
    "Product_Cat": "PC00002",
    "Qty": 150
  },
  {
    "productName": "Men's Jacket",
    "price": 180,
    "description": "Water-resistant men's outdoor jacket",
    "Product_Cat": "PC00003",
    "Qty": 95
  },
  {
    "productName": "Women's Handbag",
    "price": 250,
    "description": "Designer leather handbag",
    "Product_Cat": "PC00003",
    "Qty": 140
  },
  {
    "productName": "Running Shoes",
    "price": 150,
    "description": "Lightweight running shoes for marathon training",
    "Product_Cat": "PC00003",
    "Qty": 110
  },
  {
    "productName": "Bluetooth Speaker",
    "price": 220,
    "description": "Portable waterproof Bluetooth speaker",
    "Product_Cat": "PC00001",
    "Qty": 130
  }

]);

//Task 3c
db.Product.insertMany([
  {
    "productName": "Gaming Monitor",
    "price": 450,
    "description": "27-inch high-refresh-rate gaming monitor",
    "Product_Cat": "PC00001",
    "Qty": 90,
    "Brand": "Acer"
  },
  {
    "productName": "Server Machine",
    "price": 5800,
    "description": "High-performance server for enterprise use",
    "Product_Cat": "PC00001",
    "Qty": 60,
    "Brand": "IBM",
    "Color": "Red"
  }
]);

 
