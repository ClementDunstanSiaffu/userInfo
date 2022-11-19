
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    deviceid:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    city:{type:String},
    phone:{type:String},
    street:{type:String}
})

mongoose.model("USER_SCHEMA",userSchema);