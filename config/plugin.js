'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    static: {
        enable: true,
    },
    sharedb: {
        enable: true,
        package: 'egg-sharedb'
    },
    view: {
        enable: true,
        package: 'egg-view',
    },
    ejs: {
        enable: true,
        package: 'egg-view-ejs',
    },
    // session: true,
};