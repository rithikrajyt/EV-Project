const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const Signup = require("./models/signup");
const port = process.env.PORT || 5000;
const static_path = path.join(__dirname,"../../Frontend")
const signup_path = path.join(__dirname,"../../Frontend/signup");
const login_path = path.join(__dirname,"../../Frontend/login");

app.use(express.static(static_path));
app.get('/signup',(req,res)=>{
    res.render(signup_path);
});

app.get('/login',(req,res)=>{
    res.render(login_path);
});

app.listen(port, ()=>{
    console.log(`Server is running at port no ${port}`);
});