import mongoose from "mongoose";

const mongourl="mongodb://localhost:27017/customerlogin"

mongoose.set("strictQuery", false);
mongoose.connect(mongourl,{
    useNewUrlParser : true,
}).then(()=>{
    console.log("database connected successfully");
}).catch((err) => console.log(err))

const newschema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

})

const collection =mongoose.model("customers",newschema)



export default collection