/*
 *  Author: lijunhong
 *  Date: 2022-09-13 12:17:43
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-13 12:19:35
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:auth验证中间件
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const auth = async (ctx, next) => {
  const { authorization } = ctx.request.header;
  const token = authorization.replace("Bearer ", "");
  await next();
};

module.exports = {
  auth,
};
