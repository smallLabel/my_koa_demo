/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:17:14
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-13 19:26:11
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const Router = require("@koa/router");
const { register, login } = require("../controller/user.controller");
const {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
} = require("../middleware/user.middleware");

const router = new Router({ prefix: "/users" });
// 注册接口
router.post("/register", userValidator, verifyUser, cryptPassword, register);
// 登录接口
router.post("/login", userValidator, verifyLogin, login);

router.patch("/", (ctx, next) => {
  ctx.body = "修改密码成功";
});

module.exports = router;
