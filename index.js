const experss = require("express");
const app = experss();
const path = require('path');

const pathname = path.join(__dirname,'public');
// console.log(pathname)
// app.use(experss.static(pathname));  //used for static routing and also shows the extension of page to avoid ext do this

app.get("",(req,res) => {
    res.sendFile(`${pathname}/index.html`)
} )

app.get("/about",(req,res) => {
    res.sendFile(`${pathname}/about.html`)
} )

app.get("/*",(req,res) => {
    res.sendFile(`${pathname}/error.html`)
} )


app.listen(3000)