const mongoose=require("mongoose");
const Schema=mongoose.Schema;

let blackListSchema=new Schema({
    configName:{
        type:String,
        required:true
    },
    config_id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    block_list_reason:{
        type:String,
        required:true
    },
    comment:{
        type:String
    }
},{ collection: 'BlackList' })

module.exports=mongoose.model('BlackList',blackListSchema);