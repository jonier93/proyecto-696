import ex from 'express'
import path from 'path'
import './db.js'

const app = ex()
app.use(ex.static("frontend/build"))
const local_path = path.resolve()
app.use(ex.json())
app.use(ex.urlencoded({}))

app.listen('5000', function(req, res){
    console.log("Server has started")
})

app.get('/home', function(req, res){
    res.sendFile(local_path+"/frontend/build/index.html")
})

app.get('/register_page', (req, res)=>{
    res.sendFile(local_path+"/frontend/build/index.html")
}) 

app.post('/register_user', (req, res)=>{
    let {name, lastname, id, birthday} = req.body
    console.log(name)
    res.send("<h1> User registered </h1>")
})