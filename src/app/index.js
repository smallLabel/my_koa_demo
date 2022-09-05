/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:44:29
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-05 22:17:35
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:app文件
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const Koa = require("koa");
const KoaBody = require("koa-body");
const userRouter = require("../router/user.route");
const errorhandler = require("./errorHandle");

const app = new Koa();

app.use(KoaBody());

app.use(userRouter.routes());

app.on("error", errorhandler);

module.exports = app;
