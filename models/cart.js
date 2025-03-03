import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    products:[
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
            quantity: {
                type: Number,
                required: true,
            }
        }}]
});
const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
