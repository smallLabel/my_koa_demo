/*
 *  Author: lijunhong
 *  Date: 2022-09-15 15:49:24
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-15 17:53:40
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const path = require("path");
const { fileUploadError } = require("../constant/err.type");
class GoodsController {
  async upload(ctx, next) {
    const { file } = ctx.request.files;
    // console.log(file);
    if (file) {
      //   ctx.body = "上传成功";
      console.log(file.filepath);
      ctx.body = {
        code: 0,
        message: "图片上传成功",
        result: {
          goods_img: path.basename(file.filepath),
          //   goods_img: file.filepath,
        },
      };
    } else {
      ctx.app.emit("error", fileUploadError, ctx);
    }
  }
}

module.exports = new GoodsController();
