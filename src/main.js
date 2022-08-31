/*
 *  Author: lijunhong
 *  Date: 2022-08-31 23:05:38
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-08-31 23:07:02
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
    ctx.body = 'hello api'
})

app.listen(3000, () => {
    console.log('server is running on http"//localhost:3000');
})