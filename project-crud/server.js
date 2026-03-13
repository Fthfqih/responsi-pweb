const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

let makanan = []

// READ
app.get("/makanan",(req,res)=>{
res.json(makanan)
})

// CREATE
app.post("/makanan",(req,res)=>{
const data = req.body
data.id = Date.now()
makanan.push(data)
res.json(data)
})

// DELETE
app.delete("/makanan/:id",(req,res)=>{

const id = parseInt(req.params.id)

makanan = makanan.filter(m => m.id !== id)

res.json({message:"Data makanan dihapus"})

})

app.listen(3000,()=>{
console.log("Server berjalan di http://localhost:3000")
})