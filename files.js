const fs = require('fs');
/************************************************* */
// reading files(In the blog.txt)

// fs.readFile('./docs/blog1.txt', (err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last line');
/************************************************* */
// writing files(changing whats there or create)

// fs.writeFile('./docs/blog1.txt','Hell world',()=>{
//     console.log('file was written')
// });
// fs.writeFile('./docs/blog2.txt','Hello world',()=>{
//     console.log('file was written')
// });
/************************************************* */
// directions(Creating and delete something u created(A FOLDER))

// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created')
//     })
// }else {
//     fs.rmdir('./assets', (err)=> {
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }
/************************************************* */
// deleting files(FILES)

// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// }