// app.config是如何得到的呢？
// egg-core 中的getter方法
//   /**
//    * The configuration of application
//    * @member {Config}
//    * @since 1.0.0
//    */
//   get config() {
//     return this.loader ? this.loader.config : {};
// }

// 具体的获取，需要到app.loader.loadConfig()方法之后，
// 才真正的得到config对象的值。然后在对应的地方都可以使用了。
// this.config = target;
// this.timing.end('Load Config');


// 生命周期的加载在于app.js, agent.js。通过load.loadCumstom
// // init boots
// this.lifecycle.init();
// this.timing.end(`Load ${fileName}.js`);
// 正式初始化了lifecycle，之后无法再次添加回调函数beforeStart,beforeClose之类。

// /**
//  * The loader instance, the default class is {@link EggLoader}.
//  * If you want define
//  * @member {EggLoader} EggCore#loader
//  * @since 1.0.0
//  */
// const Loader = this[EGG_LOADER];
// assert(Loader, 'Symbol.for(\'egg#loader\') is required');
// this.loader = new Loader({
//     baseDir: options.baseDir,
//     app: this,
//     plugins: options.plugins,
//     logger: this.console,
//     serverScope: options.serverScope,
//     env: options.env,
// });

// eggCore里面初始化loader, 但是这个loader事实上是使用了this[EGG_LOADER]
// 所以之后继承到Application和Agent才可以覆盖默认的loader.虽然是覆盖， 但是对应的
// loader其实也是继承Egg.EggLoader
// 然后egg / lib / egg.js eggApplication继承eggCore.这里进行config的初始化loadConfig()
// 然后egg / lib / application.js Application继承eggApplication.这里进行config的初始化load()
// 然后egg / lib / agent.js Agent继承eggApplication.这里进行config的初始化load()

// Application中的request,response的事件emit
// handleRequest(ctx, fnMiddleware) {
//   this.emit('request', ctx);
//   super.handleRequest(ctx, fnMiddleware);
//   onFinished(ctx.res, () => this.emit('response', ctx));
// }

// 多进程情况下是如何得到server:
// egg-cluster app_worker.js startServer()
// // emit `server` event in app
// app.emit('server', server);
// 同时，使用sticky模式的话，需要将master的connection,传递给server.connection,主要是用于cluster处理
// fork的子进程，可以共享一个port。内部通过connection处理请求处理。







// 梳理egg的继承关系
// KoaApplication  基本的ctx, app, request, response对象。承担createServer, listen等基本工作
// |
// —— EggCore 定义type = application || AudioProcessingEvent, BaseDir, lifecircle, router,
// |
// ——EggApplication 注册messenger, loadConfig，dumpConfig, logger等基本内容
// |                     
// 1.Appplication                    2.Agent
// onServer 事件，dumpConfig          wrapMessage
// 自定义的loader                     自定义的loader
// 自定义框架需要继承1.Application 2.Agent 和对应的loader(可选)
// 进行自定义加载，定义[EGG_PATH]等内容。