/* ===================================
 * 生产环境配置
 * Created by Wangcj on 2018/04/20.
 * Copyright 2018, Inc.
 * =================================== */
export const environment = {

	production: false, // seo时需开启
	listenPort: 3002, // 监听端口

	interfaceFlag: '/api', // 接口标志

	// mongodb 配置
	mongodb: [{
		rsName: 'rsDB',
		host: '127.0.0.1',
		port: 10859,
		username: 'username',
		password: 'password',
		dbName: 'prodDB',
		getUrl: function () {
			return 'mongodb://' + this.username + ':' + this.password + '@' + this.host + ':' + this.port + '/' + this.dbName + '';
		}
	}],

	// redis 配置
	redis: [{
		ip: '127.0.0.1',
		port: 6379,
		pwd: '123456'
	}]
};