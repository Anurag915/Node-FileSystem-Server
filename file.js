// console.log("hi");


const fs=require("fs");

//write file

// fs.writeFileSync("./test.txt","hello their");

// fs.writeFile("./test2.txt","By async code",(err)=>{});


//read file
// const a=fs.readFileSync('./test.txt',"utf-8");
// console.log(a);

// console.log(fs.readFile("./test2.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// }))

//append in a file

// fs.appendFileSync("./test.txt","hi me\n");

// fs.appendFile("./test2.txt","hi me\n",(err)=>{});


//copying a file

// fs.cpSync("./test.txt","./copy1.txt");

//delete a file

// fs.unlinkSync("./copy1.txt");

// statistics of a file

// console.log(fs.statSync("./test.txt"));

//making a directory 

fs.mkdirSync("./mydir/a/b",{recursive:true});