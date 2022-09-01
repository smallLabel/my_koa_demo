/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:49:16
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-01 23:23:30
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description: 处理用户登录注册逻辑
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const { createUser } = require("../service/user.service");
class UserController {
  async register(ctx, next) {
    console.log(ctx.request.body);

    const { user_name, password } = ctx.request.body;
    const res = await createUser(user_name, password);
    console.log(res);
    ctx.body = ctx.request.body;
  }

  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

module.exports = new UserController();
