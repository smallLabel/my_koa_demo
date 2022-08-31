/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:49:16
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-01 01:06:01
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description: 处理用户登录注册逻辑
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
class UserController {
  async register(ctx, next) {
    ctx.body = "用户注册成功";
  }

  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

module.exports = new UserController();
