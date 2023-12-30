
const fs = require('fs');
const path = "./week-2/01-async-js/easy/a.txt";
let text = "this text is written using javascript ";

fs.writeFileSync(path, text);
console.log("file written sucessfully");