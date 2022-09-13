/*
 *  Author: lijunhong
 *  Date: 2022-09-01 23:14:34
 *  Email: lijunhong@fengmap.com
 *  LastEditTime: 2022-09-12 23:44:49
 *  LastEditors: lijunhong
 *  LastEditorsEmail: lijunhong@fengmap.com
 *  Description:
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */

const User = require("../model/user.model");
class UserService {
  async createUser(user_name, password) {
    const res = await User.create({
      user_name,
      password,
    });

    return res.dataValues;
  }

  async getUserInfo({ id, user_name, is_admin }) {
    const whereOpt = {};
    id && Object.assign(whereOpt, { id });
    user_name && Object.assign(whereOpt, { user_name });
    is_admin && Object.assign(whereOpt, { is_admin });

    const res = await User.findOne({
      attributes: [
        "id",
        "user_name",
        "is_admin",
        "password",
        "createdAt",
        "updatedAt",
      ],
      where: whereOpt,
    });
    return res?.dataValues ?? null;
  }
}

module.exports = new UserService();
