// 1. Core module
const fs = require('fs')
fs.writeFileSync("demo.txt", "hello node.js")

console.log("file created");

const os = require('os')
console.log(os.platform());
console.log(os.arch());    

//2. Local module

const add = require('./demo/Math')

console.log(add(10, 20));