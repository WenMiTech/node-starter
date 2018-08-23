const fs = require('fs');



readFileAsync = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('test.txt', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    })
}

const readFile = async () => {
    const data = await readFileAsync()
    console.log(data.toString());
}
readFile();