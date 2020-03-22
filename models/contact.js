const mongoose= require('mongoose');
const ContactSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phonenum:{
        type:String,
        required:true
    }
});
const Contact=mongoose.model('Contact',ContactSchema);
module.exports=Contact;