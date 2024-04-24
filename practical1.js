const path = require('node:path');

const notes = 'notes.txt'

path.dirname(notes);
path.basename(notes);
path.extname(notes);

console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.extname(notes));

console.log();

const fs = require('node:fs');

fs.readFile(notes,'utf8', (err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
});

const content = 'Some content!';
fs.writeFile(notes,content,(err,data)=>{
    if (err){
        console.error(err);
    }
});


const chalk = require('chalk');

console.log(chalk.yellow('hi!'));