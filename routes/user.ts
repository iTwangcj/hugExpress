/* =================================
 * 用户相关路由
 * Created by Wangcj on 2018/04/20.
 * Copyright 2018, Inc.
 * ================================= */
import * as express from 'express';
import { UserApi } from '../controllers';

const router = express.Router();

/**
 * 不需登录验证
 */
router.get('/create', UserApi.createUser);

export const userRoute = router;