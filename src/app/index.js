/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:44:29
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-01 23:09:56
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:app文件
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const Koa = require("koa");
const KoaBody = require("koa-body");
const userRouter = require("../router/user.route");

const app = new Koa();
app.use(KoaBody());

app.use(userRouter.routes());

module.exports = app;
