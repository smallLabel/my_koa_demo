/*
 *  Author: lijunhong
 *  Date: 2022-08-31 23:05:38
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-01 00:20:11
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description: 入口文件
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const Koa = require('koa')


const {APP_PORT} = require('./config/config.default')

const userRouter = require('./router/user.route')

const app = new Koa()


app.use(userRouter.routes())

// app.use((ctx, next) => {
//     ctx.body = 'hello api'
// })

app.listen(APP_PORT, () => {
    console.log(`server is running on http://localhost:${APP_PORT}`);
})