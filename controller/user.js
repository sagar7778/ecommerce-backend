import {
  Login,
  Signup,
  deleteUser,
  editUser,
  forgotPassword,
  getUser,
  getUserById,
  resetPassword,
  updatePassword,
} from "../services/user.js";

export const login = async (req, res) => {
  try {
    await Login(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const signup = async (req, res) => {
  try {
    await Signup(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const GetUser = async (req, res) => {
  try {
    await getUser(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const EditUser = async (req, res) => {
  try {
    await editUser(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const DeleteUser = async (req, res) => {
  try {
    await deleteUser(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const GetUserById = async (req, res) => {
  try {
    await getUserById(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const ForgotPassword = async (req, res) => {
  try {
    await forgotPassword(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const ResetPassword = async (req, res) => {
  try {
    await resetPassword(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const UpdatePassword = async (req, res) => {
  try {
    await updatePassword(req, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
