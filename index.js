// First Step

// const app=require('./app');
// console.log(app)

// const arr=[1,2,3,4,5,6,7];
// let result =arr.filter((item)=>{
//  return    item===3
// })
// console.log(result)


// 2 step (Core Module which are fs, console, buffer, __direname)
// const fs=require('fs');  // Non-Global Module (We export that is why we say)
// console.log("shoaib akhter"); // Global Module (we donot export that is why we say)
// fs.writeFileSync("hello.txt","Shoaib Akhter");

// console.log("-->",__filename) // Global Core Module


// 3 Step (Make Basic Server Output on Browser)

// const http=require('http');
// http.createServer((req,res)=>{
// res.write("<h1> Hello Shoaib Akhter </h1>");
// res.end();
// }).listen(3000);


// 4 Step (All About package.json)

// npm init // install package init means initialize
const colors=require('colors');
console.log("shoaib".green)

