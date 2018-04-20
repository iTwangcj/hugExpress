/* ===================================
 * 开发环境配置
 * Created by Wangcj on 2018/04/20.
 * Copyright 2018, Inc.
 * =================================== */
export const environment = {

	production: false,
	listenPort: 3001, // 监听端口
	interfaceFlag: '/api', // 接口标志

	// mongodb 配置
	mongodb: [{
		rsName: 'rsDB',
		host: '127.0.0.1',
		port: 27017,
		username: '',
		password: '',
		dbName: 'mongodb',
		getUrl: function () {
			return 'mongodb://' + this.host + ':' + this.port + '/' + this.dbName + '';
		}
	}],

	// redis 配置
	redis: [{
		ip: '127.0.0.1',
		port: 6379,
		pwd: '123456'
	}]
};