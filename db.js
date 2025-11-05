import mongoose from "mongoose";

mongoose.connect("mongodb+srv://helloammar2017_db_user:2akqNN5MHr573eAD@cluster66.phvht3t.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
        
    },

    password : {
        type : String,
        required : true,
        
    },

    firstName : String,
    lastName : String
});

const User = mongoose.model("User" , userSchema);



const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true

    }
})

const Account = mongoose.model("Account" , accountSchema);


export {
    User,
    Account
};