/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:44:29
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-19 09:54:46
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:app文件
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

const path = require("path");
const Koa = require("koa");
const KoaBody = require("koa-body");
const KoaStatic = require("koa-static");
const router = require("../router");
const errorhandler = require("./errorHandle");

const app = new Koa();

app.use(
  KoaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, "../upload"),
      keepExtensions: true,
    },
  })
);
app.use(KoaStatic(path.join(__dirname, "../upload")));
app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx, next) => {
  ctx.body = "hello world";
});

app.on("error", errorhandler);

module.exports = app;
