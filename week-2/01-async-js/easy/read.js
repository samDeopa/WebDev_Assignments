
const fs = require('fs');
const path = "./week-2/01-async-js/easy/a.txt";
fs.readFile(path,'utf8', (err, data)=>{
    console.log(data);
})