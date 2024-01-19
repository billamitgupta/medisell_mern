import express from "express";
const app = express();
const port = 3000;


app.get("/", (req,res)=>{
    res.send("Requesting ");
    console.log(res);
});
app.get("/video_conference", (res,req)=>{
    res.send("Requesting for video call");
    console.log(res);
});
app.get("/product/:id", (req,res)=>{
    const id = req.params.id;
    res.send(`Product id is ${id}`);
    //console.log(req);
});
app.get("/user_login/:username",(req,res)=>{
    const username = req.params.username;
    res.send(`your user id is ${username}`);
    //console.log(req);
});
app.listen(port,()=>{
    //console.log(`Sending mty first get request on port ${port}`);
});
app.use(express.static('asset'));
app.use(express.static('src'));
