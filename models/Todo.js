const mongoose= require('mongoose');


//Schema design
const todoSchema= new mongoose.Schema({
    description: {
        type: String,
        required: true,

    },
    category:{
        type: String,
        required: true
    },
    dueDate:{
        type: Date,
        required: true
    }
});

// Schema to model creation
const Todo= mongoose.model('Todo',todoSchema);
module.exports=Todo;