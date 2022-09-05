/*
 *  Author: lijunhong
 *  Date: 2022-09-05 22:15:25
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-05 22:16:31
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
module.exports = (err, ctx) => {
  let status = 500;
  switch (err.code) {
    case "10001":
      status = 400;
      break;
    case "10002":
      status = 409;
      break;

    default:
      break;
  }
  ctx.status = status;
  ctx.body = err;
};
