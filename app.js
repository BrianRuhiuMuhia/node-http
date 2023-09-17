const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
if(req.url=="/home")
{
    fs.readFile("index.html",(err,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
    })
}
else if(req.url=="/style")
{
    fs.readFile("style.css",(err,data)=>{
        res.write(data)
        res.end()
    })
}
})
const port=5000
server.listen(port,()=>{
    console.log(`server live on port ${port}`)
})