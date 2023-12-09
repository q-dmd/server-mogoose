const mongoose = require("mongoose");
// mogoose.connect("mongodb://127.0.0.1:27017/haogu").then(() => {
// mogoose.connect("mongodb://127.0.0.1:27017/haogu").then(() => {
//     console.log("haogu数据库链接到位");
// }).catch(err => {
//     console.log('err', err);
// })

// 连接到本地 MongoDB 数据库
mongoose.connect('mongodb://localhost/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 监听 MongoDB 连接状态
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));
db.once('open', () => {
    console.log('已成功连接到 MongoDB 数据库');
});