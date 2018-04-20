/* =================================
 * 基类
 * Created by Wangcj on 2018/04/20.
 * Copyright 2018, Inc.
 * ================================= */
const instanceMap = {};

export const Base = (Class: any) => {
	if (!instanceMap[Class.name]) {
		instanceMap[Class.name] = new Class();
	}
	return instanceMap[Class.name];
};