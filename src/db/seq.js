/*
 *  Author: lijunhong
 *  Date: 2022-09-02 00:04:33
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-02 00:39:42
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

const { Sequelize } = require("sequelize");
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/config.default");

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

// seq
//   .authenticate()
//   .then(() => {
//     console.log("链接成功");
//   })
//   .catch((err) => {
//     console.log("链接失败", err);
//   });

module.exports = seq;
