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

app.post('/register',async(req,res)=>{
    const {Name,Age,address,AadharNo,PANno,PhoneNo,email,password}=req.body
    const data={
        Name:Name,
        Age:Age,
        address:address,
        AadharNo:AadharNo,
        PhoneNo:PhoneNo,
        PANno:PANno,
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email,password:password})
        
        
        if(check){
            res.json('exists')
        }
        else{
            res.json('not exist')
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("Something went wrong Try again")

    }
})

app.put('/withdraw',async(req,res)=>{
    const {email}=req.body

    try{
        const check=await collection.findOneAndUpdate({email:email},{$set:{withdrawRequest:"Yes"}})
        
        
        console.log(check)
    }
    catch(e){
        res.json("not exist")
    }
})