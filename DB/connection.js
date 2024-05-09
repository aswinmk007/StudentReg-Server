const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("Mongodb Atlas connected with server");
    }
).catch(err=>{
    console.log("Connection failed!!!");
    console.log(err);
})