/*
 *  Author: lijunhong
 *  Date: 2022-09-05 21:33:20
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-05 23:31:25
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description: 错误处理中间件
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const bcrypt = require("bcryptjs");
const { getUserInfo } = require("../service/user.service");
const {
  userFormatError,
  userAlreadyExisted,
  userRegisterError,
} = require("../constant/err.type");
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  if (!user_name || !password) {
    console.error("用户名或者密码为空", ctx.request.body);

    ctx.app.emit("error", userFormatError, ctx);
    return;
  }
  await next();
};

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;

  try {
    const res = await getUserInfo({ user_name });
    if (res) {
      console.error("用户名已经存在", { user_name });
      ctx.app.emit("error", userAlreadyExisted, ctx);
      return;
    }
  } catch (error) {
    console.error("获取用户信息错误", { user_name });
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }

  await next();
};

const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash;
  await next();
};

module.exports = { userValidator, verifyUser, cryptPassword };
