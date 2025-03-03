import {
  Signup,
  Login,
  deleteShopkeeper,
  getShopkeeper,
  getShopkeeperById,
  forgotShoperkeeperPassword,
  editShopkeeper,
  resetShopkeeperPassword,
  updateShoperkeeperPassword,
} from "../services/shopkepper.js";

export const signup = async (req, res) => {
  try {
    await Signup(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const login = async (req, res) => {
  try {
    await Login(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const GetShopkeeper = async (req, res) => {
  try {
    await getShopkeeper(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const DeleteShopkeeper = async (req, res) => {
  try {
    await deleteShopkeeper(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const GetShopkeeperById = async (req, res) => {
  try {
    await getShopkeeperById(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const EditShopkeeper = async (req, res) => {
  try {
    await editShopkeeper(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const ForgotPassword = async (req, res) => {
  try {
    await forgotShoperkeeperPassword(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const ResetPassword = async (req, res) => {
  try {
    await resetShopkeeperPassword(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const UpdatePassword = async (req, res) => {
  try {
    await updateShoperkeeperPassword(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
