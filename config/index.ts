/* ===================================
 * 配置文件
 * Created by Wangcj on 2018/04/20.
 * Copyright 2018, Inc.
 * =================================== */
import { resolve } from 'path';

const env = process.env.NODE_ENV || 'dev';
const BasePath = resolve(__dirname, '..');
const Config = require(`./environment.${env}`).environment;

export {
	Config,
	BasePath
};