/*
 *  Author: lijunhong
 *  Date: 2022-09-13 12:17:43
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-15 16:55:26
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:auth验证中间件
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config.default");
const {
  tokenExpiredError,
  tokenInvalidError,
  hasNotAdminPermissionError,
} = require("../constant/err.type");
const auth = async (ctx, next) => {
  const { authorization } = ctx.request.header;
  const token = authorization.replace("Bearer ", "");

  try {
    const user = jwt.verify(token, JWT_SECRET);
    ctx.state.user = user;
  } catch (error) {
    switch (error.name) {
      case "TokenExpiredError": {
        console.error("token已过期", error);
        return ctx.app.emit("error", tokenExpiredError, ctx);
      }
      case "JsonWebTokenError": {
        console.error("无效的token", error);
        return ctx.app.emit("error", tokenInvalidError, ctx);
      }
    }
  }
  await next();
};

const hasAdminPermission = async (ctx, next) => {
  console.log(ctx.state.user);
  const { is_admin } = ctx.state.user;
  if (!is_admin) {
    return ctx.app.emit("error", hasNotAdminPermissionError, ctx);
  }
  await next();
};

module.exports = {
  auth,
  hasAdminPermission,
};
