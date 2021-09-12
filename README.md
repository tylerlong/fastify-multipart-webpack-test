# fastify-multipart-webpack-test


## How to reproduce the issue

```
yarn install
yarn build
yarn test
```


## Error message

```
yarn test 
yarn run v1.22.11
$ node dist/main.js
webpack:///./node_modules/fastify-multipart/index.js?:196
  const toID = hexoid()
               ^

TypeError: hexoid is not a function
    at fastifyMultipart (webpack:///./node_modules/fastify-multipart/index.js?:196:16)
    at Plugin.exec (webpack:///./node_modules/avvio/plugin.js?:132:19)
    at Boot.loadPlugin (webpack:///./node_modules/avvio/plugin.js?:267:10)
    at Task.release (webpack:///./node_modules/fastq/queue.js?:149:16)
    at worked (webpack:///./node_modules/fastq/queue.js?:201:10)
    at eval (webpack:///./node_modules/avvio/plugin.js?:270:7)
    at done (webpack:///./node_modules/avvio/plugin.js?:202:5)
    at check (webpack:///./node_modules/avvio/plugin.js?:226:9)
    at node:internal/process/task_queues:141:7
    at AsyncResource.runInAsyncScope (node:async_hooks:199:9)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
