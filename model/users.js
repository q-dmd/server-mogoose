let mongoose = require("mongoose");

// 创建规则
let userSchema = new mongoose.Schema({
    username: { // 用户名
        type: String, // 类型
        minlength: 1, // 最小长度
        maxlength: 20,  // 最大长度
        required: true, // 必填
        trim: true  // 去除空格
    },
    password: {
        type: String, // 
        minlength: 1, // 最小长度
        maxlength: 20,  // 最大长度
        required: true, // 必填
        trim: true  // 去除空格
    },
    sex: {
        type: String,
        trim: true,  // 去除空格
        enum: {
            values: ["男", "女", "保密"],
            message: "请正确输入性别"
        }
    },
    age: {
        type: String,
        trim: true  // 去除空格
    },
    email: {
        type: String,
        trim: true,  // 去除空格
    },
    phone: {
        type: String,
        trim: true,  // 去除空格
    },
    address: {
        trim: true,  // 去除空格
        type: String
    },
    create_time: {
        trim: true,  // 去除空格
        type: String
    },
    img: {
        trim: true,  // 去除空格
        type: String
    }
})

// 利用规则创建集合
const Users = mongoose.model("Users", userSchema)

// 暴露
module.exports = Users