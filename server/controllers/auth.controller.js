const authModel = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  try {
    const { username, dob, email, password } = req.body;

    if (!username || !dob || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await authModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await authModel.create({
      username,
      dob,
      email,
      password,
    });

    if (!newUser) {
      return res.status(400).json({ message: "User not created" });
    }

    return res.status(201).json({
      message: "User created successfully",
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.error("Error registering user :", error.message);
    res.status(500).json({ message: "Server Error " });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // In design there is username field but iam taking the email field because it is unique for every user

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        dob: user.dob,
      },
    });
  } catch (error) {
    console.error("Error logging in user :", error.message);
    res.status(500).json({ message: "Server Error " });
  }
};
