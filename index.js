const express= require("express")
const cors=require("cors")
require("dotenv").config()
const {connection}=require("./db")
const {tripRouter} = require("./routes/tripRoute")
const app=express()

app.use(express.json())
app.use(cors())

app.use("/trip",tripRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
    console.log("connected to server")
})