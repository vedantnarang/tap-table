const mongoose=require('mongoose');

const menuItemScehma=new mongoose.Schema({
    menuId:{
        type:mongoose.Types.ObjectId,
        ref:'menu',
        required:true,
    },
    category:{
        type:String,
        required:true,
        enum:['starters','main course','desserts','beverages']
    },
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        default:" ",
        required:false
    },
    image:{
        type:String,
        required:false
    }


})