use Inventory2;

//Task 1
db.Product.find ({price: {$gte : 150}});

//Task 2
db.Product.find({
  Color: 'Red',
  price: { $gte: 150 }
});

// Find items where color includes "red" (case-insensitive) and price >= 150. 
//This is the correct answer for Task 2
db.Product.find({
  Color: { $regex: "red", $options: "i" },
  price: { $gte: 150 }
});

//Task 3
db.Product.find({
  $or: [
    { Qty: { $gt: 1100 } },
    { price: { $gte: 2500 } }
  ]
});


//Task 5
db.Product.aggregate([
  {
    $lookup: {
      from: "Product_Category",
      localField: "Product_Cat",
      foreignField: "_id",
      as: "ProductDetails"
    }
  }
  
])
