const fs = require("fs");
// const YAML = require('json-to-pretty-yaml');
var ao = require("../assets/lib/ao");

var data = `---
title: 
date: ${Date.now()}
tag:
---`

console.log(ao.generateUUID());

fs.writeFile("test.md", data, function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log("----------新增成功-------------");
});
