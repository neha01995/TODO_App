const mongoose= require('mongoose');


// connecting to mongodb
mongoose.connect('mongodb://localhost/todo_dev');

const db= mongoose.connection;

// handling db connection error
db.on('error',console.error.bind(console,'error connecting'));

// handling db connection success
db.once('open',function(){
    console.log('connected to databse: MongoDB')
});

module.exports=db;
