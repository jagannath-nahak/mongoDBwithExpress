const mongoose=require("mongoose");

const chatschema=new mongoose.Schema({
  from:{
    type:String,
    required:true,
  },
  to:{
    type:String,
    required:true,
  },
  msg:{
    type:String,
    maxlength:500,
  },
  created_at:{
    type:Date,
    required:true,
  },
  updated_at:{
    type:Date,
    default:Date.now,
  },
});

const Chat=mongoose.model("Chat",chatschema);

module.exports=Chat;