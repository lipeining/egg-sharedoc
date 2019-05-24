# sharedoc



## QuickStart

<!-- add docs here for user -->

使用app.sharedb获取到sharedb的单实例。可以使用普通的sharedb方法，接口，事件监听。
构建自己的权限管理机制。
使用redis存储一个文档与对应的用户的权限关系，在sharedb的readSnapshots中间件中拦截
权限。
注意：一个文档是通过collectionName和documentId确定的。

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org