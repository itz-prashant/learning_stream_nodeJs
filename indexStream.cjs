const fs = require('fs')
const TransformStream = require('stream').Transform;
const readStream = fs.createReadStream(__dirname + '/run.txt');

const transFormedStream = new TransformStream({
    transform(chunk, enc, cb){
        this.push(chunk.toString().toUpperCase())
        setTimeout(cb, 2000)
    }
})

const writeStream = process.stdout

readStream.pipe(transFormedStream).pipe(writeStream);