const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EV_User", {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log(`connection successful with mongoDB`);
}).catch((e)=>{
    console.log(e);
     
})