/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:49:16
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-05 22:44:09
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description: 处理用户登录注册逻辑
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const { createUser } = require("../service/user.service");
const { userRegisterError } = require("../constant/err.type");
class UserController {
  async register(ctx, next) {
    const { user_name, password } = ctx.request.body;
    try {
      const res = await createUser(user_name, password);

      ctx.body = {
        code: 0,
        messsage: "用户注册成功",
        result: {
          id: res.id,
          user_name: res.user_name,
        },
      };
    } catch (error) {
      ctx.app.emit("error", userRegisterError, ctx);
    }
  }

  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

module.exports = new UserController();
