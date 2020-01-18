var mongoose = require('mongoose');

var dburl1 = "mongodb+srv://RomanDb:Amor123!@romanweb-oyc5d.mongodb.net/capston?retryWrites=true"; 
var dburl2 = "mongodb://localhost:27017/Capstone";

//mongoose.connect('mongodb://localhost:27017/Capstone',{userNewUrlParser: true},(err)=>
mongoose.connect(dburl1,{useNewUrlParser: true},(err)=>
    {
        if(!err) {
            console.log("db connected successfully");        
        }
        else{
            console.log('error:'+err);
    }
});

require('../Schema/ServiceSchema');
require('../Schema/userSchema')
