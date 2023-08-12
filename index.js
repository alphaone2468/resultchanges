const express=require("express");
const fileUpload = require("express-fileupload");
const expressfile=require("express-fileupload")
const pdfparse=require("pdf-parse");
const app=express()


app.use("/",express.static("public"))
app.use(fileUpload())


app.post("/gettext",(req,resp)=>{
    pdfparse(req.files.pdfFile).then((result)=>{
        resp.send(result.text);
    })
})

app.listen(5000);