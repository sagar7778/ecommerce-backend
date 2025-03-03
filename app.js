import "dotenv/config";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/database.js";

connectDB();
const app = express();
import adminRouter from "./router/admin.js";
import userRouter from "./router/user.js";
import shopkeeper from "./router/shopkepper.js";
import wishlist from "./router/wishlist.js";
import product from "./router/product.js";
import Cart from "./router/cart.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/shopkeeper", shopkeeper);
app.use("/api/wishlist", wishlist);
app.use("/api/product", product);
app.use("/api/cart", Cart);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
