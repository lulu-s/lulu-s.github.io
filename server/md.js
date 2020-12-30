var fs = require('fs');
var path = require('path');
var marked = require("marked");
const cheerio = require('cheerio')


//解析需要遍历的文件夹，我这以E盘根目录为例
var url = "../assets/article"
var filePath = path.resolve(url);

//调用文件遍历方法


var data = {
    list: []
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
    var files = fs.readdirSync(filePath); // 根据文件路径读取文件，返回文件列表
    // console.log(files);
    files.forEach(function (filename) { // 遍历读取到的文件列表
        var filedir = path.join(filePath, filename); // 获取当前文件的绝对路径
        var stats = fs.statSync(filedir) // 根据文件路径获取文件信息，返回一个fs.Stats对象
        var isFile = stats.isFile(); // 是文件
        var isDir = stats.isDirectory(); // 是文件夹
        if (isFile) {
            // var content = "<div/>" + marked(fs.readFileSync(filedir, 'utf8')) + "</div>";
            // const $ = cheerio.load(content);
            // var tem = {
            //     title: $("div").find("h1")[0].attribs.id,
            //     content,
            //     dir: "",
            //     filename,
            //     uuid: generateUUID()
            // }
            // data.list.push(tem)
            var content = fs.readFileSync(filedir, 'utf8');
            var msg = content.split("---")
            content = msg[2]
            var att = msg[1].split("\n")
            console.log(att);
            // console.log("------------------------------");
            // console.log(content);
            // const $ = cheerio.load(content);
            // console.log($.first());
            // var tem = {
            //     title: $("div").find("h1")[0].attribs.id,
            //     content,
            //     dir: "",
            //     filename,
            //     uuid: generateUUID()
            // }
            // data.list.push(tem)
        }
        if (isDir) {
            fileDisplay(filedir); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
    })
}

function init() {
    fileDisplay(filePath);

    // console.log(data.list);
}

init();

// uuid
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}