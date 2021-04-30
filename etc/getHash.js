const filename = process.argv[2]; // 읽을 파일 이름을 매개 변수로 전달
const crypto = require('crypto'); 
const fs = require('fs'); 
                                                                                                                                                                                                                               
const input = fs.createReadStream(filename); 

var dump = null;
input.on('readable', async () => { 
    const data = await input.read(); 
    if (data) {
        if (dump == null) {
            dump = Buffer.from(data)
        } else {
            dump = Buffer.concat([dump, data])
        }
    } else {
        console.log(dump.length)
        let x = Buffer.from(dump).toString('base64');
        console.log(x.length)

        hash.update(x);
        let y = hash.digest('Buffer');
        console.log(y)
        console.log(`${Buffer.from(y).toString('base64')} ${filename}`);
    } 
});


