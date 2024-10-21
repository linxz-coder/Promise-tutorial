const fs = require('fs');

// 回调函数Callback形式
/* fs.readFile('./resource/content.txt', (err, data) => {
    // 如果有錯誤，則拋出錯誤
    if (err) throw err;
    // 如果沒有錯誤，則輸出讀取的內容
    console.log(data.toString());
}); */

// Promise形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
}
);

// 调用 then
p.then((data) => {
    console.log(data.toString());
}).catch((err) => {
    console.log(err);
}
);