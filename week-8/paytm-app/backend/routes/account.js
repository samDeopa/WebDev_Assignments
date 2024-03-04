const express = require("express");
const { Account, db } = require("../db");
const router = express.Router();

router.get("/balance", async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  return res.status(200).json({
    balance: account.balance,
  });
});

router.post("/transfer", async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  if (account.amount < req.amount) {
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const transferAccount = await Account.findOne({
    userId: req.to,
  });
  db.startSession;
});
module.exports = { router };
