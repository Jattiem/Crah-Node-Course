// const friends = ['Delo', 'Patrick', 'Samuel', 'David', 'Pierrot'];
// setTimeout(()=>{
//     console.log(friends);
// },3000);
// var array = [1, 2, 3, 4, 5]
// for(var i = 0; i < array.length; i++) {
//   delay(i)
// }
// function delay(i) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// }
/******************************** */
const file = require('fs');
const path = require('path');
const myfilename = './data.txt';

// Write to file
// async function writeToFile(content) {
//     try{
//         await file.promises.writeFile(path.join(__dirname, myfilename), content);
//     }catch(err) {
//         console.log(err.message);
//     }
// }

// Read from a file
// async function readFromAFile() {
//     try{
//         let data = await file.promises.readFile(path.join(__dirname, myfilename),'utf8');
//         console.log(data);
//     }catch(err) {
//         console.log(err.message);
//     }
// }

// Append to a file
// async function appendToAFile(content) {
//     try{
//         await file.promises.appendFile(path.join(__dirname, myfilename), content);
//     }catch(err) {
//         console.log(err.message);
//     }
// }

// Calling functions
// writeToFile('Hello Joel');
// appendToAFile('\nBye Joel');
// readFromAFile();
let cnt =0;
let names = ['Peter','Henk','Sabelo','Lerato'];
setTimeout(function(){
    console.log("SetTimeout....");
    // To stop the timer
    clearInterval(greeting);
}, 5000);

// 
const greeting = setInterval(()=>{
    if(cnt == names.length ){
        cnt = 0;
    }
    console.log(`Hello ${names[cnt]}`);
    cnt++;
}, 1000);
