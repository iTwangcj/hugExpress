/* ===================================
 * 路由管理
 * Created by Wangcj on 2018/09/18.
 * Copyright 2018, Inc.
 * =================================== */
import { Config } from '../config';
import { userRoute } from './user';

export const Route = (app: any) => {

    // 允许跨域
    app.all('*', (req: any, res: any, next: any) => {
        let AllowHeaders = 'Content-Type, Content-Length, Authorization, Accept, Content-Disposition, X-Requested-With, X_Requested_With';
        const requestHeaders = req.headers['access-control-request-headers'];
        if (requestHeaders) {
            AllowHeaders += ',' + requestHeaders;
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', AllowHeaders);
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
        res.header('Access-Control-Expose-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Cache-Control, Connection, Content-Length, Content-Type, Date, Expires, Vary, X-Powered-By');
        if (req.method === 'OPTIONS') {
            res.sendStatus(200); // 让options请求快速返回
        } else {
            next();
        }
    });

    // 检查用户
    app.all('*', async (req: any, res: any, next: any) => {
        // req.headers.token = req.headers.token || req.query.token;
        // await Auth._update(req);
        // await Auth._getUser(req);
        next();
    });

    // 路由
    const prefixes = `${Config.interfaceFlag}`;
    app.use(prefixes + '/user', userRoute);
};