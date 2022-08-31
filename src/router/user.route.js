/*
 *  Author: lijunhong
 *  Date: 2022-09-01 00:17:14
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-01 00:18:23
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const Router = require('@koa/router')


const router = new Router({prefix: '/users'})

router.get('/',(ctx, next) => {
    ctx.body= 'hello users'
})

module.exports = router;