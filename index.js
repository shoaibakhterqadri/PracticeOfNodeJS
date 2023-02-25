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



// 9 step Asynchoronous Basic in Node.js

// console.log('start exe...');

// setTimeout(()=>{
//       console.log("logic exe...");

// },2000)

// console.log('complete exe...');


// 10 step Handle Asynchoronous Data 

// let a=10;
// let b=10;


// let waitingData=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//             resolve(60)
//       },2000)
// })

// waitingData.then((data)=>{
// b=data;
// console.log(a+b);
// })


// console.log(a+b)


// Express JS Start (Render HTML and JSON)

// const express=require('express');
// const app=express();

// app.get('',(req,res)=>{
// res.send(`
// <h1>Hello, this is homepage</h1>
// <a href='/about'>go to about</a>
// `)
// })

// app.get('/about',(req,res)=>{
// res.send(`<input type="text" placeholder='Enter your name'/>
// ${req.query.name}
// `)
      
// })

// app.get('/blog',(req,res)=>{
//       res.send({
//             name:'shoaib',
//             email:'shoaib@gmail.com'
//       }) 
//       })

// app.listen(3000);



// Make HTML Pages


// const express=require('express');
// const path=require('path')

// const app=express();
// const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath))

// app.listen(3000);


// URL Pages

// const express=require('express');
// const path=require('path')

// const app=express();
// const publicPath=path.join(__dirname,'public')

// app.get('',(req,res)=>{
// res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/health',(req,res)=>{
//       res.sendFile(`${publicPath}/health.html`)
//       })

//       app.get('*',(req,res)=>{
//             res.sendFile(`${publicPath}/noPage.html`)
//             })

// app.listen(3000);



// ****************************************************
// Most Important for blogging
// Template Engine


// const express=require('express');
// const path=require('path')

// const app=express();
// const publicPath=path.join(__dirname,'public')

// app.set('view engine','ejs');

// app.get('',(req,res)=>{
// res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/profile',(req,res)=>{
//       const user={
//             name:'Shoaib Akhter',
//             age:15,
//             city:'Karachi',
//             skills:['php','node','js','html']
//       }
//    res.render('profile',{user});

//       })

//       app.get('/login',(req,res)=>{
//             res.render('login')
//       })

// app.get('/health',(req,res)=>{
//       res.sendFile(`${publicPath}/health.html`)
//       })

//       app.get('*',(req,res)=>{
//             res.sendFile(`${publicPath}/noPage.html`)
//             })

// app.listen(3000);


// Dynamic Page








