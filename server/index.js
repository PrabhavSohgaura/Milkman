import express from "express";
import dotenv from "dotenv";
import mongoDB from "./config/mongoDB.js";
import router from "./routes/productRoutes.js";

const app = express();
dotenv.config();
mongoDB();

app.use(express.json());

//routing
app.use("/api/products", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`));
