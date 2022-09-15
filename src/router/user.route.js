/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:17:14
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-15 11:32:55
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const Router = require("@koa/router");
const {
  register,
  login,
  changePassword,
} = require("../controller/user.controller");
const {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
} = require("../middleware/user.middleware");
const { auth } = require("../middleware/auth.middleware");

const router = new Router({ prefix: "/users" });
// 注册接口
router.post("/register", userValidator, verifyUser, cryptPassword, register);
// 登录接口
router.post("/login", userValidator, verifyLogin, login);
// 修改密码
router.patch("/", auth, cryptPassword, changePassword);

module.exports = router;
