import express, { json } from 'express'
const app=express()
// import mongoose, { Collection } from 'mongoose'
import cors from 'cors'
// import Customer from './models/models.Customer.js'
app.use(express.json())
app.use(cors())
import collection from './mongo.js'





app.listen(5000,()=>{
    console.log("Server Started!")
})

// app.get('/',async(req,res)=>{
//     res.send({status:'ok'})
// })

app.post('/login',async(req,res)=>{
    const {email,password}=req.body

    try{
        const check=await collection.findOne({email:email,password:password})
        
        
        if(check){
            res.json('exists')
        }
        else{
            res.json("not exist")
        }
    }
    catch(e){
        res.json("not exist")
    }
})