import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  // HASH THE PASSWORD USING "BCRYPT" PACKAGE
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE AND SAVE NEW USER TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    res.status(201).json({ message: "User created successfully..." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Failed to create user!.." });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //CHECK IF USER EXISTS
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    if (!user) return res.status(401).json({ message: "Invalid credentials!" });

    //CHECK IF PASSWORDS MATCH
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(401).json({ message: "Invalid credentials!" });

    //GENERATE COOKIE TOKEN AND SEND IT TO USER

    const age = 1000 * 60 * 60 * 24 * 7; // miliseconds x seconds x minutes x hours x days = 1 week
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: age,
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        // use Secure in production mode, because it works only in https
        // secure:true,
        maxAge: age,
      })
      .status(200)
      .json({ message: "Login successful..." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Failed to login!.." });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successfully" });
};
