const express=require("express");
// const path=require("path")
const server=express();
server.get("/",(req,res)=>{
    res.send("ok");
});
// sever.use(express.static(""))
server.listen(8000);