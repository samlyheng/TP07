const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', function (req, res) {
     fs.readFile('./CRUD.html', 'utf8' , (err, data) => {
         if (err) {
              console.error(err)
         return
        }
        res.send(data)
    })   
})
app.get('/detail', function (req, res) {
    fs.readFile('./fetch.html', 'utf8' , (err, data) => {
        if (err) {
             console.error(err)
        return
       }
       res.send(data)
   })   
})


app.listen(3000, ()=>{
    console.log("your app is running on http://localhost:3000");
})