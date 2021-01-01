const fs = require("fs");
var ao = require("../assets/lib/ao");
var inquirer = require('inquirer');

// 问答获取用户参数
var questions = [
    {
        type: 'input',
        name: 'filename',
        message: "请输入文件名",
        default: function () {
            return 'default';
        },
        // 检测
        validate: function (value) {
            if(value) return true;
            return '文件名不能为空！';
        },
    },
    {
        type: 'input',
        name: 'title',
        message: "请输入文章标题",
        default: function () {
            return '标题';
        },
    },
    {
        type: 'input',
        name: 'tag',
        message: "请输入文章类型，空格分割：",
        default: function () {
            return [];
        },
    }
]

// 使用 questions，并生成 md 文件
var url = "../assets/article/"
inquirer.prompt(questions).then((answers) => {

var data = `-----------
title: ${answers.title}
date:  ${ao.getMyDate(Date.now()).full}
tag:   ${answers.tag}
-----------
在这里随便写点什么`

    fs.writeFile(url + answers.filename + ".md", data, function (err, data) {
        if (err) {
            console.error(err);
        }
        console.log("创建成功～～");
    });
});

