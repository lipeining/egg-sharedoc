'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        ctx.session = { user: { userId: 1, email: 'firstUser' } };
        console.log('in home', ctx.session);
        await ctx.render('index');
    }
    async sharedb() {
        const { app } = this;
        console.log(app.sharedb);
        this.ctx.body = {};
    }
    async permission() {
        const { ctx } = this;
        const email = ctx.request.query.email;
        const role = ctx.request.query.role;
        const result = await ctx.service.doc.setUserPermission({ documentId: 'richtext', collectionName: 'examples', email, permission: { role } });
        ctx.body = result;
    }
}

module.exports = HomeController;