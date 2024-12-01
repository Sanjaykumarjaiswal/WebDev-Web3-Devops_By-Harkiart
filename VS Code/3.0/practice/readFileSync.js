const fs=require("fs");

const contents= fs.readFile("a.txt","utf-8");
console.log(contents);

const contents2= fs.readFileSync("b.txt","utf-8");
console.log(contents2);
  
