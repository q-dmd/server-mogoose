// 引入 espress模块
const express = require("express");
const app = new express()
const POST = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(POST, () => {
    console.log(`Example app listening on post ${POST}`)
})