/*
 *  Author: lijunhong
 *  Date: 2022-09-15 15:47:45
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-15 16:52:27
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const { upload } = require("../controller/goods.controller");
const { hasAdminPermission, auth } = require("../middleware/auth.middleware");

const Router = require("@koa/router");

const router = new Router({ prefix: "/goods" });

router.post("/upload", auth, hasAdminPermission, upload);

module.exports = router;
