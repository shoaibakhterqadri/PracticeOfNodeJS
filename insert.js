const  dbConnect=require('./mongodb');

const insert=async()=>{
      const db= await dbConnect();
      console.log("insert function");
      const result=db.insert(
{ name:'nots',brand:'vivo',price:5222,category:'mobile'}

      )
}

insert();