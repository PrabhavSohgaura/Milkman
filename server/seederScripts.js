import mongoDB from "./config/mongoDB.js";
import products from "./data/products.js";
import Product from "./models/Product.js";

mongoDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(products);
    console.log("prodocut import success");
    process.exit();
  } catch (error) {
    console.log("product import not successful");
    process.exit(1);
  }
};
importData();
