const mongoose=require("mongoose");
const Schema=mongoose.Schema;

let WhiteListSchema=new Schema({
  
    email:{
        type:String,
        required:true
    },
    white_list_reason:{
        type:String,
        required:true
    }
},{ collection: 'WhiteList' })

module.exports=mongoose.model('WhiteList',WhiteListSchema);