// 引入 espress模块
const express = require("express");
const app = new express()
const db = require('./database/db.js')
console.log('db', db)
const usersRouter = require('./router/users.js')
const POST = 3000
// 配置静态资源目录
app.use(express.static("public"));
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.use("/", usersRouter);
app.listen(POST, () => {
    console.log(`http://localhost:${POST}`)
})