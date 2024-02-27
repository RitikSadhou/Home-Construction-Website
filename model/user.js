const mongoose=require("mongoose")
const userData=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    MobileNo:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    category:{
        type:String ,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const User=mongoose.model("user", userData);
module.exports=User;
