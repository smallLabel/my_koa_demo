/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:17:14
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-01 01:07:50
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const Router = require("@koa/router");
const { register, login } = require("../controller/user.controller");

const router = new Router({ prefix: "/users" });
// 注册接口
router.post("/register", register);
// 登录接口
router.post("/login", login);

module.exports = router;
