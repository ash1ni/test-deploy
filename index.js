const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("<h1>This is Server</h1>");
});

app.get('/sample', (req,res)=>{
    try {
        res.send("<h2>Sample route for test</h2>")
    } catch (error) {
       res.render(error);
    }
    
});

app.get('/login', (req,res)=>{
    try {
        res.status(200).json('this is the login page')
    } catch (error) {
        res.send(error)
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${port}`); 
});
