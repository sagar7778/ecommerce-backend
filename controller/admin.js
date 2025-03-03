import { Login, Signup } from "../services/admin.js";

export const login = async (req, res) => {
  try {
    const result = await Login(req, res);
    res.status(200).json(result);
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const signup = async (req, res) => {
  try {
    const result = await Signup(req, res);
    res.status(200).json(result);
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
