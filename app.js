import "dotenv/config";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/database.js";

connectDB();
const app = express();
import adminRouter from "./router/admin.js";
import userRouter from "./router/user.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
