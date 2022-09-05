/*
 *  Author: lijunhong
 *  Date: 2022-09-04 22:06:48
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-04 22:35:39
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const User = seq.define(
  "zd_user",
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "用户名， 唯一",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "是否为管理员，0： 不是管理员（默认）",
    },
  },
  {
    timestamps: true,
  }
);

// User.sync({ force: true });

module.exports = User;
