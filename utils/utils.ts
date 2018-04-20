/* ===================================
 * 工具类
 * Created by Wangcj on 2018/04/20.
 * Copyright 2018, Inc.
 * =================================== */
import * as fs from 'fs';
import * as path from 'path';
import { Base } from '../controllers/base';

export const Utils = Base(class Utils {
    /**
     * 获取文件夹下面的所有的文件(包括子文件夹)
     * @param {String} dir
     * @param {String} extName
     * @returns {Array}
     *
     * Example:
     *  const filePaths = Utils.getAllFiles(path.join(__dirname, '..'), '.ts');
     */
    getAllFiles (dir: string, extName?: string) {
        let AllFiles = [];
        const iteration = (dirPath) => {
            const files = fs.readdirSync(dirPath);
            files.forEach(p => {
                if ('node_modules' !== p && p.charAt(0) !== '.') {
                    const filePath = path.join(dirPath, p);
                    if (fs.statSync(filePath).isDirectory()) {
                        iteration(filePath);
                    } else {
                        const _extName = path.extname(p);
                        if (extName && _extName === extName) {
                            AllFiles.push(path.join(dirPath, p));
                        }
                        if (!extName) {
                            AllFiles.push(path.join(dirPath, p));
                        }
                    }
                }
            });
        };
        iteration(dir);
        return AllFiles;
    }
});