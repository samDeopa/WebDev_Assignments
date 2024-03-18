const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { userSchema, updateSchema, signinSchema } = require("../zodSchemas");
const { JWT_SECRET } = require("../config");
const authMiddleware = require("./middleware");
const { Account } = require("../db");
const router = express.Router();

router.get("./signup", async (req, res, next) => {
  const body = req.body();
  const { success } = userSchema.safeParse(currentbodyPayload);
  if (!success) {
    return res.json({
      msg: " Email areasy exists/ Invalid inputs",
    });
  }
  const user = User.findOne({
    username: body.username,
  });
  if (user) {
    return res.json({
      msg: " Email areasy exists/ Invalid inputs",
    });
  }
  const dpUser = await Users.create(body);
  const token = jwt.sign(
    {
      userId: dpUser._id,
    },
    JWT_SECRET
  );
  const userId = user._id;
  await Account.create({
    userId,
    amount: 1 + Math.random() * 10000,
  });

  res.send({
    message: "User created successfully",
    token: token,
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

router.post("./signin", (req, res, next) => {
  const { sucess } = signinSchema.safeParse(req.body);
  if (!sucess) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
  const user = req.body;
  const existingUser = Users.findOne({
    username: body.username,
  });
  if (!existingUser || existingUser.password != user.password) {
    res.status(411).send({
      message: "Error while logging in",
    });
  }
  const token = jwt.sign(
    {
      userId: existingUser._id,
    },
    JWT_SECRET
  );
  res.status(200).send({ token: token });
});

router.put("/", authMiddleware, async (req, res, next) => {
  const { success } = updateSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne(req.body, {
    _id: req.userId,
  });

  res.json({
    message: "Updated successfully",
  });
});
module.exports = router;
