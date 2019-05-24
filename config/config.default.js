/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1558503169086_7640';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    config.redis = {
        client: {
            port: 6379, // Redis port
            host: '127.0.0.1', // Redis host
            password: '',
            db: 0,
        },
    };
    config.sessionRedis = {
        // 如果redis有两个clients的话，需要指定name
        // name: 'session',
    };
    config.sharedb = {
        client: {
            database: {
                // type: 'mingo-memory'
                type: 'mongo',
                url: 'mongodb://localhost:27017/sharedoc'
            }
        }
    };
    config.security = {
        csrf: false,
        ctoken: false,
    };
    config.session = {
        maxAge: 24 * 3600 * 1000, // ms
        key: 'EGG_SESS',
        httpOnly: true,
        encrypt: true,
    };
    config.web = {
        url: 'http://localhost:8000',
        port: 8000,
    };
    config.cluster = {
        listen: {
            port: 8000
        }
    };
    config.static = {
        prefix: '',
        // dir: [path.join(appInfo.baseDir, 'app/public'), path.join(appInfo.baseDir, 'rich-text/node_modules/quill/dist')],
        dir: [path.join(appInfo.baseDir, 'app/public')],
        dynamic: true,
        preload: false,
        buffer: false,
        maxFiles: 1000,
        maxAge: 604800000,
    };
    config.view = {
        root: [
            path.join(appInfo.baseDir, 'app/view'),
        ].join(','),
        defaultExtension: '.html',
        mapping: {
            '.ejs': 'ejs',
            '.html': 'ejs',
        },
    };
    config.ejs = {};
    // maybe sesssion
    return {
        ...config,
        ...userConfig,
    };
};