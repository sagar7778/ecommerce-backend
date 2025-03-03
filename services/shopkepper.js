import Shopkeeper from "../models/shopkepper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingShopkeeper = await Shopkeeper.findOne({ email });
    if (!existingShopkeeper) {
      return res.status(404).json({ message: "Shopkeeper not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingShopkeeper.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        email: existingShopkeeper.email,
        id: existingShopkeeper._id,
        name: existingShopkeeper.name,
        phoneNo: existingShopkeeper.phoneNo,
        companyName: existingShopkeeper.companyName,
      },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingShopkeeper, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const Signup = async (req, res) => {
  const { name, email, password, address, phoneNo, companyName } = req.body;
  console.log(req.body);
  try {
    const existingShopkeeper = await Shopkeeper.findOne({ email });
    if (existingShopkeeper) {
      return res.status(400).json({ message: "Shopkeeper already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await Shopkeeper.create({
      email,
      password: hashedPassword,
      name: name,
      address: address,
      phoneNo: phoneNo,
      companyName: companyName,
    });
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
        name: result.name,
        phoneNo: result.phoneNo,
        companyName: result.companyName,
      },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getShopkeeper = async (req, res) => {
  try {
    const shopkeeper = await Shopkeeper.find({});
    if (!shopkeeper) {
      return res.status(404).json({ message: "Shopkeeper not found" });
    }
    res.status(200).json(shopkeeper);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteShopkeeper = async (req, res) => {
  const { id } = req.params;
  try {
    const shopkeeper = await Shopkeeper.findByIdAndDelete(id);
    if (!shopkeeper) {
      return res.status(404).json({ message: "Shopkeeper not found" });
    }
    res.status(200).json({ message: "Shopkeeper deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getShopkeeperById = async (req, res) => {
  const { id } = req.params;
  try {
    const shopkeeper = await Shopkeeper.findById(id);
    if (!shopkeeper) {
      return res.status(404).json({ message: "Shopkeeper not found" });
    }
    res.status(200).json(shopkeeper);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const editShopkeeper = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, address, phoneNo, companyName } = req.body;
  try {
    const shopkeeper = await Shopkeeper.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
        address,
        phoneNo,
        companyName,
      },
      { new: true }
    );
    if (!shopkeeper) {
      return res.status(404).json({ message: "Shopkeeper not found" });
    }
    res.status(200).json(shopkeeper);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const forgotShoperkeeperPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const shopkeeper = await Shopkeeper.findOne({ email });
    if (!shopkeeper) {
      return res.status(404).json({ message: "Shopkeeper not found" });
    }
    const token = jwt.sign(
      {
        email: shopkeeper.email,
        id: shopkeeper._id,
        name: shopkeeper.name,
        phoneNo: shopkeeper.phoneNo,
        companyName: shopkeeper.companyName,
      },
      "test",
      { expiresIn: "1h" }
    );
    const resetLink = `http://localhost:3000/resetpassword/${token}`;
    res.status(200).json({ resetLink });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const resetShopkeeperPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  try {
    const decodedData = jwt.verify(token, "test");
    const shopkeeper = await Shopkeeper.findById(decodedData.id);
    if (!shopkeeper) {
      return res.status(404).json({ message: "Shopkeeper not found" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    shopkeeper.password = hashedPassword;
    await shopkeeper.save();
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const updateShoperkeeperPassword = async (req, res) => {
  const { email, newPassword, oldPassword } = req.body;
  try {
    const shopkeeper = await Shopkeeper.findOne({ email });
    if (!shopkeeper) {
      return res.status(404).json({ message: "Shopkeeper not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      oldPassword,
      shopkeeper.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    shopkeeper.password = hashedPassword;
    await shopkeeper.save();
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
