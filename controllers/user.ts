/* =================================
 * 用户管理
 * Created by Wangcj on 2018/04/20.
 * Copyright 2018, Inc.
 * ================================= */
import { Base } from './base';

export const UserApi = Base(class User {

    constructor () {}

    createUser (req: any, res: any) {
        res.json({ code: 200, data: 'test' });
    }
});