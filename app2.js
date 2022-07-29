// const { json } = require('body-parser');
const express = require('express');

const app2 = express();

app2.listen(4000);

let courses = [
    {id: 1, name: 'Software Engineering'},
    {id: 2, name: 'Web Development'},
    {id: 3, name: "Database Management" }
    ];

app2.get('/', (req, res)=>{
    (res.send(JSON.stringify(courses)));
});

app2.get('/courses/:id',(req, res)=>{
    if (req.params.id > courses.length) {
    } else {
        res.send(JSON.stringify(courses[req.params.id - 1]));
    }
});
