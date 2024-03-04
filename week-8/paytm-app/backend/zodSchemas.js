const zod = require("zod");

const userSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  userName: zod.string().email(),
  password: zod.string().min(6),
});
const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

const updateSchema = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
module.exports = { userSchema, updateSchema, signinSchema };
