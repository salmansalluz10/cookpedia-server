const mongoose = require("mongoose")

const connectionString = process.env.CONNECTIONSTRING

mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDB Atlas connection successfull");
    
}).catch(err=>{
    console.log("Connection Failed");
    console.log(err);
})
