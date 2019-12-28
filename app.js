const Koa = require('koa')
const serve = require('koa-static')
const path = require('path')

const app = new Koa()

const options = {
    maxage: 0,
    index: 'index.html',
    gzip: true
}

app.use(serve(path.resolve(__dirname, 'public/_book'), options))

app.listen(3000)
console.log('server is running at 3000')