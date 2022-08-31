/*
 *  Author: lijunhong
 *  Date: 2022-08-31 23:40:34
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-08-31 23:41:40
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description: 默认配置文件
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const dotenv = require('dotenv')
dotenv.config()

console.log(process.env.APP_PORT);


module.exports = process.env;