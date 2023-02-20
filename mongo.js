import mongoose from "mongoose";

const mongourl="mongodb://localhost:27017/customerlogin"

mongoose.set("strictQuery", false);
mongoose.connect(mongourl,{
    useNewUrlParser : true,
}).then(()=>{
    console.log("database connected successfully");
}).catch((err) => console.log(err))

const newschema= new mongoose.Schema({
   Name:{
        type:String,
        required:true,
    },
    Age:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    AadharNo:{
        type:String,
        required:true,
        unique:true
    },
    PANno:{
        type:String,
        required:true,
        unique:true
    },
    PhoneNo:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    withdrawRequest:{
        type:String,
        required:false
    },
    type:{
        type:String,
        required:true
        
    }
   


})

const collection =mongoose.model("customers",newschema)



export default collection