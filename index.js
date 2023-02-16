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
// const colors=require('colors');
// console.log("shoaib".green)


// 5 step (Install Nodemon)
// npm i nodemon -g
// node ./index.js

// console.log(5+1)



// 6 step (Simple API)
// const http=require('http');
// const data=require('./data')

// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'application/json'});
// res.write(JSON.stringify(data));
// res.end();

// }).listen(3000);


// 7 step (input from command line)


// console.log(process.argv[2])

// const fs=require('fs');
// const input=process.argv;

// fs.writeFileSync(input[2],input[3])

// if(input[2]=='add'){
//       fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//       fs.unlinkSync(input[3]);
// }
// else{
//       console.log("Invalid Input")
// }

// 8 step CRUD with file System

// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'crud');
// const filePath=`${dirPath}/apple.txt`

// fs.writeFileSync(filePath,'This is a simple text file')
// fs.readFile(filePath,'utf-8',(err,item)=>{
//       console.log(item)
// })

// for updation
// fs.appendFile(filePath,'I am adding this because of updation',(err)=>{
//       if(!err) console.log('file is updated')
// })

// // File name change
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//       if(!err) console.log('File name is updated')
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)