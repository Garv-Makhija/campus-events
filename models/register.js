const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({            //define schema for user
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    event:{
        type:String,
        required:false
    }
});
module.exports=mongoose.model('User',userSchema);  //create model from schema
                            