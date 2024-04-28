import { Mongoose } from "mongoose";
 const {Schema, model} = Mongoose;


 const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    
    username: {
        type: String,
        required: false
    },

    password: {
        type: String,
        required: false
    }


 });

const userModel = model('userModel', userSchema);

export default userModel;