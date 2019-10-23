const mongoose=require("mongoose");
const Schema=mongoose.Schema;

let configSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    configName:{
        type:String,
        required:true
    },
    comments:{
        type:String
    }
},{ collection: 'Configuration' })

module.exports=mongoose.model('Configuration',configSchema);