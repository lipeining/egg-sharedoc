'use strict';

const Service = require('egg').Service;
const prefix = 'Collection';
class DocService extends Service {
    async setUserPermission(values) {
        const { app } = this;
        const { collectionName, documentId, email, permission } = values;
        console.log('set', values);
        return await app.redis.hset(`${prefix}:${collectionName}:${documentId}`, email, JSON.stringify(permission));
    }
    async getUserPermission(values) {
        const { app } = this;
        const { collectionName, documentId, email } = values;
        console.log('get', values);
        const permission = await app.redis.hget(`${prefix}:${collectionName}:${documentId}`, email);
        return JSON.parse(permission);
    }
}

module.exports = DocService;