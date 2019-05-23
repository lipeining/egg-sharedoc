'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        ctx.session = { user: { userId: 1 } };
        console.log(ctx.session);
        await ctx.render('index');
    }
}

module.exports = HomeController;