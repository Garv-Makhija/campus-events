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
    }
});
const User=mongoose.model('User',userSchema);  //create model from schema
module.exports=User;                            //export the model for use in other files