import express, { json, request } from 'express'
const app=express()
// import mongoose, { Collection } from 'mongoose'
import cors from 'cors'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import passport from 'passport'
// import bodyParser from 'body-parser'
import collection from './mongo.js'
// import Customer from './models/models.Customer.js'
import jwt from 'jsonwebtoken'
app.use(express.json())
app.use(session(
    {
        key:'email',
        secret:'secret',
        resave:true,
        saveUninitialized:true,
        cookie:{
            maxAge:30000
        }
    }
    ))
app.use(passport.initialize());
app.use(passport.session());

app.use(cors())


app.use(cookieParser())
// app.use(bodyParser.urlencoded({extended:true}))


app.listen(5000,()=>{
    console.log("Server Started!")
})



app.post('/login',async(req,res)=>{
    const {email,password}=req.body

    try{
        const check=await collection.findOne({email:email,password:password})
        const type=check.type
        
        if(check){
           // req.session.email=req.body.email
            
            // console.log(req.session)
           // res.json(req.session.email)
           const token=jwt.sign({
            email:check.email,
            password:check.password,
            name:check.Name
           },'secret')
           
        
        res.json({status:"ok",user:type})
           
            
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


app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
       
        if(err){
            res.json({success:false})
        }
        else{
            req.logout((err)=>{
                if (err) console.log(`unable to logout`, err);
            })
            req.session=null
            res.json({success:true})
        }
    })
    // req.session=null
    // res.json({success:true})
})

app.put('/withdraw',async(req,res)=>{
    const {request}=req.body
   // const email=req.session.email
    req.session.email=req.body.email
    const email=req.session.email
    try{
        const check=await collection.findOneAndUpdate({email:email},{$set:{withdrawRequest:request}})
        
        
        console.log(check)
    }
    catch(e){
        res.json("not exist")
    }
})