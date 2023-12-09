const express = require("express");
const Users = require('../model/users.js')
console.log('Users', Users)
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.get("/login", (req, res) => {
    // console.log('req.baseUrl', req.baseUrl)
    console.log('req.body', req.body)
    console.log('req.stringify', req.stringify)
    // console.log('req.params', req.params)
    // console.log('req.query', req.query)
    // console.log('req.ip', req.ip)
    // res.send
    const result = JSON.stringify({
        api: 'login'
    })
    res.send(result)
})



module.exports = router;


// req.url：获取请求的URL。
// req.method：获取请求的方法（如GET、POST等）。
// req.headers：获取请求头信息。
// req.query：获取查询字符串参数。
// req.body：获取请求体数据（通常用于处理POST请求）。
// req.params：获取路由参数。
// req.cookies：获取cookie信息。
// req.signedCookies：获取签名后的cookie信息。
// req.ip：获取客户端IP地址。
// req.path：获取请求路径。
// req.originalUrl：获取原始请求URL（包含查询参数）。
// req.route：获取当前匹配的路由信息。
// req.accepts()：判断客户端可接受的MIME类型。
// req.get(field)：获取指定字段的值。
// req.is(type)：判断请求是否为指定的类型。
// req.set(field, [value])：设置指定字段的值。
// req.type(type)：设置请求的内容类型。
// req.length([encoding])：获取请求体的长度。
// req.charset([encoding])：获取请求体的字符集编码。
// req.urlWithQuery([url])：拼接URL和查询字符串。
// req.format({param: 'value'})：格式化请求参数。
// req.abort()：中止请求。
// req.timeLog()：记录请求处理时间。
// req.__proto__：访问原型链上的方法。

/*
res.status(code)：设置响应状态码。
res.statusCode：获取响应状态码。
res.set(field, [value])：设置响应头字段的值。
res.get(field)：获取响应头字段的值。
res.header(field, [value])：设置或获取响应头字段的值。
res.type(type)：设置响应的内容类型。
res.length()：设置响应体的长度。
res.redirect(url, [status])：重定向到指定的URL，并设置状态码。
res.attachment([filename])：设置响应头为附件模式。
resformat：将对象转换为指定的格式并发送响应。
resformat：将字符串转换为指定的格式并发送响应。
res[format](data, [options])：将数据转换为指定的格式并发送响应。
res[format](stream, [options])：将流转换为指定的格式并发送响应。
res[format](buffer, [options])：将缓冲区转换为指定的格式并发送响应。
res[format](array, [options])：将数组转换为指定的格式并发送响应。
res[format](object, [options])：将对象转换为指定的格式并发送响应。
res[format](file, [options])：将文件转换为指定的格式并发送响应。
res[format](function, [options])：将函数转换为指定的格式并发送响应。
res[format](string, [options])：将字符串转换为指定的格式并发送响应。
res[format](number, [options])：将数字转换为指定的格式并发送响应。
res[format](boolean, [options])：将布尔值转换为指定的格式并发送响应。
res[format](null, [options])：将null值转换为指定的格式并发送响应。
res.send(data): 将数据作为字符串或Buffer发送到客户端。如果提供了第二个参数，则将其作为Content-Type头发送。

res.sendDate(date, [complete]): 发送一个包含指定日期和时间的HTTP响应头。如果提供了第二个参数，则将其作为Date头发送。

res.sendFile(path, [options], callback): 将文件作为HTTP响应发送到客户端。可以指定文件路径、选项和回调函数。

res.sendStatus(statusCode): 发送一个带有指定状态码的HTTP响应。

res.render(view, [locals], callback): 渲染一个视图并将其作为HTTP响应发送到客户端。可以指定视图名称、本地变量和回调函数。
*/


