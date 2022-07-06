const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('./library'))

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root: __dirname})
})

app.listen(PORT,()=>{console.log(`server is listen to port ${PORT}`)})